<h1 class="centered">Lesson 3 - Quantum Circuits and Quantum Gates</h1>

Now that we have sufficient knowledge about Quantum Mechanics, and that we know about the behaviour and workings of
Qubits, Quantum Computers' equivalent of bits, we may now start studying how to manipulate them using **Quantum Circuits.**

## Quantum Circuits

Quantum Circuits are circuits made of gates that qubits may traverse. Every time that a qubit traverses one of said
gates, the state of the qubit may be altered. The idea is similar to standard electronic circuits, which also
use gates to modify voltage to change how a computer or a processor could interpret said voltage as a value.

## Quantum Gates

There are many gates that can be used to operate on qubits in Quantum Computing. The most common ones will be
documented here, and they will be explained in detail in order to make their behaviour clearer.

<h3 class="h3-subheader">Hadamard Gate</h3>

The Hadamard gate is a complicated one to understand. It causes the qubit to enter a state of superposition, 
which means that **observing the qubit after it passes the Hadamard gate would yield equal chances to observe states |0⟩ and |1⟩**.

Its mathematical definition is the following:

<img class="img-block centered" src="img/lesson03/hadamard-math.png">

<h3 class="h3-subheader">Pauli's X Gate</h3>

The Pauli "X" gate, named after [Wolfgang Ernst Pauli][w-pauli], an Austrian theoretical physicist known for the [matrices of the same name][pauli-matrices], **makes the qubit rotate on its X-axis by π radians**. As a result, **it inverts the value returned by the qubit**, similar to how a NOT gate behaves for classical computing.

It can mathematically be represented as the following matrix:

<img class="img-block centered" src="img/lesson03/pauli-x.png">

The first row represents the mapping of the **|0⟩ state as it goes through the gate**, and the second row is
the mapping of the **|1⟩ state, which then becomes |0⟩.** The visual representation of this gate is the following:

<img class="img-block centered" src="img/lesson03/pauli-x-gate.png">

<h3 class="h3-subheader">Pauli's Y Gate</h3>

The second Pauli gate, the "Y" gate, **causes the qubit to rotate by π radians on its Y axis**. This operation can be represented by Pauli's Y matrix:

<img class="img-block centered" src="img/lesson03/pauli-y.png">

The visual representation of the gate is as follows:

<img class="img-block centered" src="img/lesson03/pauli-y-gate.png">

<h3 class="h3-subheader">Pauli's Z Gate</h3>

The final Pauli gate, as it can be deducted, is the "Z" gate, and **rotates the qubit by π radians on its Z axis**. The corresponding Pauli matrix is the following:

<img class="img-block centered" src="img/lesson03/pauli-z.png">

The visual representation of the gate is as follows:

<img class="img-block centered" src="img/lesson03/pauli-z-gate.png">

<h3 class="h3-subheader">Controlled Not Gate</h3>

The CNOT (Controlled Not) Gate, applies a Pauli X/NOT operation on a Qubit A depending on the state of a Qubit B.
More precisely, **if Qubit A is in state |1⟩, the Pauli X/NOT operation is applied to Qubit B**,
but **if Qubit A is in state |0⟩, Qubit B will not be altered**.

<!-- TODO: Add a mathematical description of Controlled Not Gate -->

<h3 class="h3-subheader">Toffoli Gate</h3>

The Toffoli Gate, named after its inventor [Tommaso Toffoli][toffoli-page], or even CCNOT gate, is a gate that
applies a Pauli X/NOT operation on a Qubit A depending on the state of Qubits B and C. 
**The NOT operation occurs if Qubit B and C are in state |1⟩.**

<h3 class="h3-subheader">Swap Gate</h3>

The Swap Gate, as its name implies, is a gate affecting two Qubits A and B, and exchange their states.

<!-- TODO: Add a mathematical description of Swap Gate -->

<h3 class="h3-subheader">S and S<span class="math-formula math-exponent">†</span> Gate</h3>

The S Gate is also known as the Z90 gate, because it acts on a single Qubit, and **rotates the Qubit around its Z-axis by 90 degrees (π/2 radians).** S<span class="math-formula math-exponent">†</span> being the conjugate transpose equivalent of the S gate, **represents a -90 degrees (-π/2 radians) rotation on the Z-axis.**

Therefore, the affirmation <span class="math-formula">SS<span class="math-formula math-exponent">†</span> = I</span> is true.

The visual representation of the S and S<span class="math-formula math-exponent">†</span> gates are the following:

<img class="img-block centered" src="img/lesson03/s-gate.png">
<img class="img-block centered" src="img/lesson03/s-dagger-gate.png">

<!-- TODO: Add a mathematical description of each Gate -->

<h3 class="h3-subheader">T and T<span class="math-formula math-exponent">†</span> Gate</h3>

The T gate is a gate that operates on a single Qubit, and causes said Qubit to perform a 45 degrees (π/4 radians) rotation on the Z-axis. Inversely, the T<span class="math-formula math-exponent">†</span> gate represents a negative rotation, much like the relation between S and S<span class="math-formula math-exponent">†</span>.

Due to its nature, it is possible to define the operation performed by the S gate with the T operator as follows:

<!-- TODO: Add a mathematical description of each Gate -->

The graphical representation of the T and T<span class="math-formula math-exponent">†</span> gates are:

<img class="img-block centered" src="img/lesson03/t-gate.png">
<img class="img-block centered" src="img/lesson03/t-dagger-gate.png">

## References:

Hadamard Gate:

- Chatterjee, A., 2003. Introduction to quantum computation. arXiv preprint quant-ph/0312111. Available at: https://arxiv.org/abs/quant-ph/0312111

Pauli X Gate:

- [Quantum Inspire: Pauli X Gate][qi-pauli-xgate]

Controlled Not Gate:

- [Quantum Inspire: Controlled Not Gate][qi-cnot-gate]

[w-pauli]: https://en.wikipedia.org/wiki/Wolfgang_Pauli
[pauli-matrices]: https://en.wikipedia.org/wiki/Pauli_matrices

[qi-pauli-xgate]: https://www.quantum-inspire.com/kbase/pauli-x/

[qi-cnot-gate]: https://www.quantum-inspire.com/kbase/cnot/

[toffoli-page]: https://en.wikipedia.org/wiki/Tommaso_Toffoli