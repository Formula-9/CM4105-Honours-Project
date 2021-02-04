<h1 class="centered">Quantum Algorithms</h1>

## Introduction to Quantum Algorithms

In the previous lessons, we have seen the concepts of Qubits, their representation, and Quantum Gates. Therefore,
we know part of how a Quantum Computer works, so the next step is the creation of Quantum Algorithms.

Considering that we can't exactly "run code" on a Quantum Computer like we do on normal computers, we have to
build circuits using Quantum Gates to achieve a similar effect: since we are manipulating Qubits
<!-- TODO: Everything -->

## The Deutsche-Jozsa Algorithm

Let us start with an algorithm that has mathematical usage: the Deutsche-Jozsa algorithm. Named after its
two creators David Deutsche and Richard Jozsa, its use is to determine if a binary function (a function
returning either 0 or 1) is constant or balanced. 

The main reason why a quantum implementation is better for this algorithm is because of the number of
iterations required to determine the nature of the function. On a standard computer, to determine the
nature of the function, if we consider that the function take ***n*** parameters, it would then take
**2**<span class="math-formula math-exponent">n-1</span>**+1** iterations. However, with a Quantum Computer, and the Quantum version of this algorithm, a single iteration is enough to determine the nature of the function.



## References

Deutsche-Jozsa Algorithm:

- community.qiskit.org. (n.d.). Deutsch-Jozsa Algorithm. [online] Available at: https://qiskit.org/textbook/ch-algorithms/deutsch-jozsa.html [Accessed 3 Feb. 2021].
- Voorhoede, D. (n.d.). Code example: Deutsch-Jozsa algorithm. [online] Quantum Inspire. Available at: https://www.quantum-inspire.com/kbase/deutsch-jozsa-algorithm/ [Accessed 3 Feb. 2021].
‌