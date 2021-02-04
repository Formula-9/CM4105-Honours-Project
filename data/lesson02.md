<h1 class="centered">An Overview of Quantum Computing</h1>

## History of Quantum Computing

## Qubits: What are they ?

<!-- TODO: Explain in more detail the concept -->

Quantum Computers differ from standard computers, in the sense that **they don't use conventional bits as treatment units**. Instead, they use an unit named **Qubit**. Qubits carry a **quantum state** as information, which means that
they are not simply 1 or 0, but they can be **|1⟩ or |0⟩**. This is a significant difference, since Qubits follow the
rules that have been seen in Lesson 1.

Visually, a Qubit can be represented with the **Bloch's Sphere**, named after the physicist [Felix Bloch][felix-bloch]:

<img class="img-block centered" src="img/lesson02/bloch-sphere.png">

As we can see, a Qubit requires three axes to be represented. The Z axis on the Bloch Sphere often corresponds to
the states **|1⟩ and |0⟩**, but the X and Y axes are just as important, since **it is possible to perform rotations around these axes, which could alter the information of the Qubit when observed.**

## Manipulating Qubits: Quantum Computers

## Another form of Quantum Computing: Quantum Annealers 

In addition to Quantum Computers, there is another way to manipulate Qubits: Quantum Annealers. Unlike 
Quantum Computers however, Quantum Annealers can manipulate a larger number of Qubits: in fact, the main
maker of Quantum Annealers, D-Wave Systems' latest machine, the Advantage, can manipulate up to 5640 Qubits,
which is more than the Chinese Jiuzhang Quantum Computer, which can operate on 76 Qubits at once at most.

But, that additional power comes with a cost: Quantum Annealers can't operate on Qubits the same way
traditional Quantum Computers do. Quantum Annealers observe quantum fluctuations; changes of energy, and
don't really interfere with Qubits the way Quantum Computers do.

Of course, such behaviour means that they are more suited for a different type of task: they are used
for optimization and sampling problems. For instance, the very famous "travelling salesman" problem is
a suitable task for a Quantum Annealer, as it could find the optimum path for the salesman.

On a final note, Quantum Annealers won't be covered in these materials, as while Quantum Annealing
is a subdomain of Quantum Computing, it is a complex one, and the goal is to focus on standard Quantum
Computing: using Quantum Computers and Quantum Circuits to manipulate Qubits. However, the point of this
section was to clear any potential confusion that may arise when reading potential articles that could
group Quantum Annealing and Quantum Computing together.

## References

Qubits and Bloch Sphere:

- Wikipedia Contributors (2020). Bloch sphere. \[online\] Wikipedia. Available at: https://en.wikipedia.org/wiki/Bloch_sphere.

Quantum Computers:

Quantum Annealers:

- Ruiz, A.D.L.F., 2014. Quantum annealing. arXiv preprint arXiv:1404.2465. Available at: https://arxiv.org/abs/1404.2465
- docs.dwavesys.com. (n.d.). Introduction to Quantum Annealing — D-Wave System Documentation documentation. \[online\] Available at: https://docs.dwavesys.com/docs/latest/c_gs_2.html.

[felix-bloch]: https://en.wikipedia.org/wiki/Felix_Bloch