<h1 class="centered">Quantum Teleportation as a Circuit</h1>

In the previous lab, we have set up the Python programming language as well as the Qiskit library and its dependencies. In this lab, we are going to review what has been in the first Lessons, and build a circuit to illustrate the concept of Quantum Teleportation. At the end of the lab, instructions will be given on how to run the circuit on IBM Q.

## Preface: Creating an IBM Q Experience Account

In order to be able to run code designed for Quantum Computers with Qiskit, we need an IBM Q Experience account. Once this account has been created, we can acquire a token that can be used in Qiskit notebooks to be able to run Quantum Circuits built with Qiskit on the IBM Q mainframes.

Luckily, it is easily to create one, and if you already have a Google, Twitter, LinkedIn or GitHub account, this step can be even faster. If you don't use any of these services, it is still possible to create an IBM ID with your mail address and a password.

### Acquiring your IBM Q Account Token

Once your account has been created, you can go and acquire your token [here][ibm-q-account]. Click on Copy Token, and save said token somewhere safe. As said previously, this token is required to access the various IBM Q mainframes to execute Quantum Circuits you'll design.

<img class="img-block centered" src="img/lab02/qiskit-code.png">

Now, you can save your account with this simple snippet of code:

```python
from qiskit import IBMQ
IBMQ.save_account('MY_API_TOKEN')
```

And anything you wish to load your account's data, use the following portion of code:

```python
# Note: if you have imported everything in Qiskit (import * from qiskit), this line is useless.
from qiskit import IBMQ
IBMQ.load_account()
```

## Step 1: Quantum Entanglement

If you remember what had been said in the first lesson, in order to perform Quantum Teleportation, we need to create a pair of entangled Qubits. To keep things simple, instructions will be explained in a step-by-step manner, and commented snippets of code will be given.

Now, since this is the first lab, let us review how to create a Quantum Circuit. In order to perform Quantum Teleportation, we are going to use a 3 Qubit circuit, and also tell Qiskit we need two classical bits.

But first, let us start by importing the packages we are going to use. Paste this snippet of code into the first cell of your Jupyter Notebook, and run it:

```python
# Import Qiskit. This is always the first thing to do when creating a new Jupyter Notebook.
from qiskit import *
from qiskit.visualization import plot_circuit_layout, plot_histogram, plot_bloch_vector
```

The first line import all the Qiskit modules, and the second imports a few utilities that can be useful whenever we wish to get a graphical representation of a circuit or Qubit or even the output of a Quantum Circuit.

Now that the packages have been imported, we are going to create our circuit. This can be done with the following piece of code:

```python
# Create a circuit with 3 Qubits, prefixed with 'q', and two classical bits, prefixed by 'bx'/'bz'.
qubits = QuantumRegister(3, 'q')
cbx = ClassicalRegister(1, 'bx')
cbz = ClassicalRegister(1, 'bz')
quantum_teleportation_circuit = QuantumCircuit(qubits, cbx, cbz)
```

The extra arguments, namely the 'q' and 'bx'/'bz' arguments here are the names that will prefix the identifier of the Qubits and the bits; example, Qubit 0 will be named q0 whenever we will display our circuit, and Bit 1 will be named b1.

With everything set up and ready to go, it's time to work on entangling two Qubits. In our case, we are going to assume that we want to transfer the state in q0 to q2. Therefore, q1 is going to act as a middleman in the process. Let us make a Bell pair with Qubits q1 and q2 together:

```python
# Apply a Hadamard Gate on q1
quantum_teleportation_circuit.h(1)
# Apply a Controlled Not on q2, using q1 as the control qubit.
quantum_teleportation_circuit.cnot(1, 2)
# Draw the current circuit. Uncomment the line to print a graphical representation of the circuit.
# quantum_teleportation_circuit.draw('mpl')
```

Now, we have q1 and q2 entangled, we can proceed. We are now going to entangle q1 and q0. To achieve this, we are going to use the following piece of code:

```python
# Separate previous section of the circuit with a barrier.
# This is to prevent Qiskit from doing some "optimizations" on the circuit.
quantum_teleportation_circuit.barrier()
# Apply a Controlled Not on our middleman Qubit (q1), using q0 as the control qubit.
quantum_teleportation_circuit.cnot(0, 1)
# Apply a Hadamard Gate on Qubit q2.
quantum_teleportation_circuit.h(0)
# Draw the current circuit
#quantum_teleportation_circuit.draw('mpl')
```

## Step 2: Measuring the state of our Qubit

Now, the next step towards Quantum teleportation is measuring the state of the Qubit we wish to transfer. However, we also need to measure the state of the middleman Qubit. The reason for this is already obvious if you read the part on Quantum Teleportation in Lesson 1, but if you forgot, the two bits resulting from the measurement will come in handy later.

To measure our qubits, we are going to do the following:

```python
# Separate previous section of the circuit with a barrier.
# This is to prevent Qiskit from doing some "optimizations" on the circuit.
quantum_teleportation_circuit.barrier()
# Measure q0 into bz
quantum_teleportation_circuit.measure(0, 1)
# Measure q1 into bx
quantum_teleportation_circuit.measure(1, 0)
# Draw the current circuit
#quantum_teleportation_circuit.draw('mpl')
```

Our classical bits have now been set, so we can correct the state of our Qubit if required.

## Step 3: Correcting our Qubit

Now that we have all the data required, we can proceed to correct the state of our Qubit and disentangle it. If you remember what has been said in Lesson 1, we must use the state of our classical bits to apply a few more gates to our Qubit (q2) to get it in the same state as the original (q0).

We are going to do so right now:

```python
# Controlled X on qubit if bit bx is set to 1
quantum_teleportation_circuit.x(2).c_if(cbx, 1)
# Controlled X on qubit if bit bz is set to 1
quantum_teleportation_circuit.z(2).c_if(cbz, 1)
# Draw the circuit
quantum_teleportation_circuit.draw('mpl')
```

As we can see, if our control bit bx is set, we apply a Pauli X gate to our qubit that received the state, and if the control bit bz is set, we may also apply a Pauli Z gate to the qubit. Once these operations have been realize, you should be able to observe that qubit q2 is in the same state as q0 was in at the beginning of the circuit.

## Bonus: Completed Jupyter Notebook and Running a Quantum Circuit on the IBM Q Platform

A completed version of this lab can be found [here][lab02notebook]. If you wish to run a Quantum Circuit on the IBM Q platform, here is how to do it.

[lab02notebook]: https://github.com/Formula-9/CM4105-Honours-Project/blob/master/data/notebooks/lab02.ipynb

## References

-   community.qiskit.org. (n.d.). Quantum Teleportation. [online] Available at: https://qiskit.org/textbook/ch-algorithms/teleportation.html.

-   Wikipedia Contributors (2019). Quantum teleportation. \[online\] Wikipedia. Available at: https://en.wikipedia.org/wiki/Quantum_teleportation.

-   Bouwmeester, D., Pan, J.-W., Mattle, K., Eibl, M., Weinfurter, H. and Zeilinger, A. (1997). Experimental quantum teleportation. Nature, 390(6660), pp.575–579.

-   Brassard, G., Braunstein, S.L. and Cleve, R. (1998). Teleportation as a quantum computation. Physica D: Nonlinear Phenomena, \[online\] 120(1-2), pp.43–47. Available at: https://arxiv.org/pdf/quant-ph/9605035.pdf \[Accessed 27 Feb. 2021\].

-   Matuschak, A. and Nielsen, M. (2019). How quantum teleportation works. quantum.country. \[online\] Available at: https://quantum.country/teleportation \[Accessed 27 Feb. 2021\].
