<h1 class="centered">Creating QFT Circuits</h1>

Previously, we have created a circuit to witness the concept of Quantum Teleportation with Qiskit. Now, we are going to implement the building block of various Quantum Computing algorithms: the Quantum Fourier Transform.

## Objective: Implementing the Quantum Fourier Transform

In order to provide a step-by-step tutorial, we will start with a single-qubit implementation of the circuit, before working our way up to using multiple Qubits, and explanation the repercussions of adding more Qubits.

Furthermore, mathematical explanations will be provided in order to clarify how the circuit works, though reading the referenced materials can also be a good idea if you desire to get more in-depth explanations about Quantum Fourier Transform, the vanilla Fast Fourier Transform or just the Fourier Transform in general.

## Preface: The Maths behind the Quantum Fourier Transform

To better understand how QFT works and can be built, we are first going to comment on the mathematical definition of the Quantum Fourier Transform. As a reminder, the formula for the standard Discrete Fourier Transform (DFT) is as follows:

<img src="img/lab03/dft_formula.png" alt="DFT(k) = (1/√N) * Σ[n=0; N-1] x(n)*e^(2πi*((n*k)/N))" />

The goal of the Discrete Fourier Transform is to convert a sequence of N complex numbers to a different sequence of complex numbers. The Quantum version of this formula is the same, with the difference that we are applying it to states |i⟩. The IBM Qiskit websites expresses this change as the following mapping operation:

<img src="img/lab03/qft_mapping.png" alt="|x⟩ => (1/√N) * Σ[n=0; N-1] e^(2πi*((x*y)/N)) * |y⟩" />

### Step 1: A Single Qubit QFT Circuit

Let us begin by creating a new Quantum Circuit with a single Qubit. In case you haven't imported the necessary utilities, please import them with this piece of code:

```python
# Import Qiskit. This is always the first thing to do when creating a new Jupyter Notebook.
from qiskit import *
from qiskit.visualization import plot_circuit_layout, plot_histogram, plot_bloch_vector
```

Once the packages have been imported, you may create a single qubit circuit as follows:

```python
# We are going to create a simple Quantum Circuit with a single Qubit here.
one_qubit_circuit = QuantumCircuit(QuantumRegister(1, name="q1"))
```

As the comment line obviously states, this line creates a Quantum Circuit, with a single Quantum Register (= Qubit), that will be named "q1". Now, let's get working on that circuit ! To create a single Qubit QFT, we need to do the following:

```python
one_qubit_circuit.h(0)
# Uncomment the following line if you wish to see the graphical representation of the circuit !
#one_qubit_circuit.draw('mpl')
```

This simple line performs a Hadamard operation on our unique Qubit q1. That's right, a single qubit QFT boils down to a single Hadamard gate on a Qubit. Why is that ?

Because the Hadamard Gate, in its operation, is actually very similar to a Quantum Fourier Transform. To reuse a better and clearer definition, **_both produce the uniform superposition of all states_** (source: [Quantum Computing StackExchange: Why can the QFT be replaced by Hadamard gates?][se-quote]). However, using a Hadamard gate on its own won't be enough if we desire to use more qubits to make a more precise Quantum Fourier Transform.

### Step 2: Our QFT Circuit, now on two Qubits !

Now that we have explained the secrets of the Hadamard Gate, and how relevant it can be to build QFT circuits, we can now push our circuit a bit further, and add an extra bit. This is where things will get interesting, because the logic will change !

First of all, let's get started by building a two Qubit circuit. You can do so with the following snippet of code:

```python
two_qubit_circuit = QuantumCircuit(QuantumRegister(2))
```

Now that we've got our extra Qubit, let us set up the circuit. Don't worry if you don't understand what is happening, everything will be explained right after !

```python
# We need the Pi constant for later
from math import pi

# Start from the first step again...
two_qubit_circuit.h(0)

# ... and enter a new gate: the Controlled P Gate !
two_qubit_circuit.cp(pi/2, 1, 0)
two_qubit_circuit.h(1)

# Swap the Qubits !
two_qubit_circuit.swap(0, 1)

# Once again, feel free to uncomment this line to have a visual representation of the circuit.
#two_qubit_circuit.draw('mpl')
```

This circuit starts to really bring the logic of the QFT to the table: As we can see, we took our single-Qubit QFT, and then, we perform a Controlled P gate. This gate wasn't explained in Lesson 3, but this is a proper moment to explain it. This gate behaves like the Controlled gates you have read about in Lesson 3, except that instead of applying something like a Pauli X operation on the target Qubit, this one is different, it applies a rotation to the |1⟩ state. Note that I haven't mentioned how the rotation behaves: that's because we get to control by how many radians the Qubit will spin on its Z-Axis. Hence why we also needed the Pi constant !

Oh, and also, the Qiskit website provides some interesting properties about the P gate in general. Notably, here's what their Qiskit API has documented about the P gate:

-   P(λ = π) = Z; Using a P Gate with a lambda value of π radians is equivalent to using a Z gate.
-   P(λ = π/2) = S; Using a P Gate with a lambda value of π radians is equivalent to using a S gate.
-   P(λ = π/4) = T; Using a P Gate with a lambda value of π radians is equivalent to using a T gate.

These properties make sense if you read again what the S and T gates do on Qubits, but it is still interesting to observe such a behaviour.

Now that we are back to the description of the circuit, let us review the changes: we now have a Controlled Phase Change on the second Qubit depending on the state of the first Qubit, and we apply a Hadamard gate on our second qubit to respect the formula we have seen in the first section of this lab (if you remember the e^(2πi*((n*k)/N)) section of the formula, you should be able to start piecing why we are using Controlled Phase Changes and Hadamard gates). Then, we exchange the order of the Qubits with a Swap gate to reorder the Qubits properly. This last phase is unnecessary if we are rigorous with the ordering of the Qubits/how they are measured, and a few papers discussing multiple Qubits QFT don't use Swap Gates, but some do. It has been detailed here for the sake of detailing why some researchers use it.

### Step 3: Double it again ! A QFT Circuit with Four Qubits !

Let us attempt to double the number of Qubits of our circuit. The goal of this exercise will be to determine how the QFT works the more Qubits we add. We have already seen the "basic" versions of the QFT with one or two Qubits, but the four Qubits version will allow us to understand how it operates with more qubits.

Once again, let us start by creating a four Qubit circuit:

```python
four_qubit_circuit = QuantumCircuit(QuantumRegister(4))
```

And now, let us build the circuit:

```python
# First Step:
# Start by applying a Hadamard Gate on Qubit 0.
# Apply multiple Controlled P gates using the other qubits to Qubit 0.
# Note: The barrier command is here to prevent Qiskit from "optimizing" the position of gates.
four_qubit_circuit.h(0)
four_qubit_circuit.cp(pi/2, 1, 0)
four_qubit_circuit.cp(pi/4, 2, 0)
four_qubit_circuit.cp(pi/8, 3, 0)
four_qubit_circuit.barrier()

# Second Step: Repeat on Qubit 1.
four_qubit_circuit.h(1)
four_qubit_circuit.cp(pi/2, 2, 1)
four_qubit_circuit.cp(pi/4, 3, 1)
four_qubit_circuit.barrier()

# Third Step: Repeat on Qubit 2.
four_qubit_circuit.h(2)
four_qubit_circuit.cp(pi/2, 3, 2)
four_qubit_circuit.barrier()

# Finish by doing a single Qubit QFT and swapping Qubits adequately.
four_qubit_circuit.h(3)
four_qubit_circuit.swap(0, 3)
four_qubit_circuit.swap(1, 2)

# Print the Circuit.
# four_qubit_circuit.draw('mpl')
```

As we can see, we have built upon our previous design, and we have added more Controlled Phase Change Gates to follow the mathematical representation of the Quantum Fourier Transform, and additional Swap gates in order to reorder the Qubits as explained previously. This means that the Quantum Fourier Transform is scalable; we can use this 4-qubit circuit and build upon it to make a Quantum Fourier Transform circuit that operates on n qubits. Let us see how.

### Step 4: Generalizing and Conclusion

With the result of previous exercises, we can generalize the QFT to n Qubits. This section won't be about building a circuit, but about giving a description of the circuit for n Qubits. So far, we have seen that the QFT can be implemented with the use of Hadamard gates, Controlled Phase gates, and optionally Swap gates. We have seen a practical implementation of the QFT on 2 and 4 qubits, but we can now, using the formula, create an "algorithm" that describes the QFT on n Qubits. The algorithm, as a step-by-step guide, would be:

```
Start QFT
	Allocate N qubits, named q0 to qN-1.
	Allocate highestQubit to be equal to the index of the highest qubit
	For qb, starting from the index of lowest qubit (ex: q0 => 0) to highestQubit, repeat:
		Apply a Hadamard Gate to Qubit qb.
		Allocate a variable n that starts at 1.
		Allocate a variable q, starting from qb+1.
		While q is inferior or equal to highestQubit, repeat:
			Apply a Controlled Phase Gate, with λ = (2π/2^n) on qubit at index q.
			Increment n by 1.
		End Repeat
		Add a barrier to the circuit.
	End Repeat
End QFT
```

## Bonus: Completed Jupyter Notebook

A completed Jupyter Notebook of this Lab is available [here][lab03notebook].

## References

-   Muradian, R. (2011). Quantum Fourier Transform Circuit - Wolfram Demonstrations Project. \[online\] Available at: https://demonstrations.wolfram.com/QuantumFourierTransformCircuit/.

-   qiskit.org. (n.d.). qiskit.circuit.library.PhaseGate — Qiskit 0.24.0 documentation. \[online\] Available at: https://qiskit.org/documentation/stubs/qiskit.circuit.library.PhaseGate.html [Accessed 9 Mar. 2021].

-   community.qiskit.org. (n.d.). Quantum Fourier Transform. \[online\] Available at: https://qiskit.org/textbook/ch-algorithms/quantum-fourier-transform.html.

-   Hui, J. (2019). QC — Quantum Fourier Transform. \[online\] Medium. Available at: https://jonathan-hui.medium.com/qc-quantum-fourier-transform-45436f90a43 [Accessed 9 Mar. 2021].

-   Quantum Computing UK. (2020). Quantum Fourier Transform in Qiskit. \[online\] Available at: https://quantumcomputinguk.org/tutorials/quantum-fourier-transform-in-qiskit [Accessed 9 Mar. 2021].

-   Gidney, C. (2014). Building your own Quantum Fourier Transform. \[online\] Available at: https://algassert.com/quantum/2014/03/07/Building-your-own-Quantum-Fourier-Transform.html [Accessed 9 Mar. 2021].

-   Quantum Computing (CST Part II). (n.d.). \[online\] . Available at: https://www.cl.cam.ac.uk/teaching/1920/QuantComp/Quantum_Computing_Lecture_9.pdf [Accessed 10 Mar. 2021].

-   Quantum Science Summer School (QS3). 2021. QFT Fun on the IBM QX. [online] Available at: http://qs3.mit.edu/images/pdf/QS3-2017---QFT-Demo-on-IBM-QX.pdf [Accessed 4 April 2021].

-   Quantum Computing Stack Exchange. (n.d.). quantum fourier transform - Why can the QFT be replaced by Hadamard gates? [online] Available at: https://quantumcomputing.stackexchange.com/questions/9769/why-can-the-qft-be-replaced-by-hadamard-gates [Accessed 4 Apr. 2021].

-   Physics Stack Exchange. (n.d.). quantum mechanics - What is the order of the gates making up the QFT on two qubits? [online] Available at: https://physics.stackexchange.com/questions/202273/what-is-the-order-of-the-gates-making-up-the-qft-on-two-qubits [Accessed 6 Apr. 2021].

[ibm-q-account]: https://quantum-computing.ibm.com/account
[lab03notebook]: https://github.com/Formula-9/CM4105-Honours-Project/blob/master/data/notebooks/lab03.ipynb
[se-quote]: https://quantumcomputing.stackexchange.com/questions/9769/why-can-the-qft-be-replaced-by-hadamard-gates
