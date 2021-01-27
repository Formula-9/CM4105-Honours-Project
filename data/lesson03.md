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
which means that **observing the qubit after it passes the Hadamard gate would yield equal chances to observe states  |0⟩ and |1⟩**.



<h3 class="h3-subheader">Pauli's X Gate</h3>

The Pauli "X" gate, named after [Wolfgang Ernst Pauli][w-pauli], an Austrian theoretical physicist known for the [matrices of the same name][pauli-matrices], **makes the qubit rotate on its X-axis by π radians**. As a result, **it inverts the value returned by the qubit**, similar to how a NOT gate behaves for classical computing.


<h3 class="h3-subheader">Pauli's Y Gate</h3>

The second Pauli gate, the "Y" gate, **causes the qubit to rotate by π radians on its Y axis**. This operation can be represented by Pauli's Y matrix:

<h3 class="h3-subheader">Pauli's Z Gate</h3>

The final Pauli gate, as it can be deducted, is the "Z" gate, and **rotates the qubit by π radians on its Z axis**. The corresponding Pauli matrix is the following:

## References:

Hadamard Gate:

- Chatterjee, A., 2003. Introduction to quantum computation. [arXiv preprint quant-ph/0312111][arxiv-chatterjee].

Pauli X Gate:

- [Quantum Inspire: Pauli X Gate][qi-pauli-xgate]

[w-pauli]: https://en.wikipedia.org/wiki/Wolfgang_Pauli
[pauli-matrices]: https://en.wikipedia.org/wiki/Pauli_matrices

[arxiv-chatterjee]: https://arxiv.org/abs/quant-ph/0312111
[qi-pauli-xgate]: https://www.quantum-inspire.com/kbase/pauli-x/