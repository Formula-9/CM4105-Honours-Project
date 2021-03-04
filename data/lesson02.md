<h1 class="centered">An Overview of Quantum Computing</h1>

## A Brief History of Quantum Computing

As an introduction to Quantum Computing, a retrospective of the key dates in this domain would be interesting, as Quantum Computing is a subject that dates back to 1979. Being able to observe the progresses achieved in this domain allows us to appreciate how our definition of Quantum Computing came to be.

For the sake of keeping things succinct, only key dates and achievements have been listed below.

- 1979-1980: Paul Benioff demonstrates in a paper (_The computer as a physical system: A microscopic quantum mechanical Hamiltonian model of computers as represented by Turing machines_) how a theoretical Quantum Computer could be built, laying the groundwork for Quantum Computing.
- 1985: David Deutsche describes the concept of Quantum Algorithms in his work (_Quantum theory, the Church–Turing principle and the universal quantum computer_), and anticipates the creation of quantum computers.
- 1993: Ethan Bernstein and Umesh Vazirani demonstrate non-deterministic quantum advantage, and describe a quantum version of the Fourier transform in their paper (_Quantum complexity theory_).
- 1994: Peter Shor creates his own algorithm, and documents it in his paper (_Polynomial-Time Algorithms for Prime Factorization and Discrete Logarithms on a Quantum Computer_). Said algorithm is used to factorize integers on Quantum Computers.
- 1996: Lov K. Grover creates a quantum algorithm specialized in searching. The algorithm can supposedly find data in O(√N) iterations unlike standard approaches which find data in O(N). (_A fast quantum mechanical algorithm for database search_).
- 1998: First demonstration of a Quantum Algorithm, where a 2-qubit Quantum Computer is used to solve Deutsche's problem at Oxford University.
- 2000: Creation of the first 5-qubit Quantum Computer at the Technical University of Munich, shortly surpassed by a 7-qubit Quantum Computer built at the Los Alamos National Laboratory.
- 2011: D-Wave develop Quantum Annealing, and releases the D-Wave One system, a 128-Qubit Quantum Computer dedicated to Quantum Annealing.
- 2015: Emulation of a Quantum Computer is achieved on a classical computer.
- 2020: Chinese researchers claim to have achieved Quantum Supremacy with their 76-Qubits Quantum Computer Jiuzhang. Previously, only Google had claimed (in a paper) to have achieved Quantum Supremacy with their Sycamore Quantum Computer in 2019, but the claim had generated controversy.

## Qubits: What are they ?

Quantum Computers differ from standard computers, in the sense that **they don't use conventional bits as treatment units**. Instead, they use an unit named **Qubit**. Qubits carry a **quantum state** as information, which means that they are not simply 1 or 0, but they can be **|1⟩ or |0⟩**. This is a significant difference, since Qubits follow the rules that have been seen in Lesson 1.

Visually, a Qubit can be represented with the **Bloch's Sphere**, named after the physicist [Felix Bloch][felix-bloch]:

<img class="img-block centered" src="img/lesson02/bloch-sphere.png">

As we can see, a Qubit requires three axes to be represented. The Z axis on the Bloch Sphere often corresponds to
the states **|1⟩ and |0⟩**, but the X and Y axes are just as important, since **it is possible to perform rotations around these axes, which could alter the probability of observing the Qubit in a given state.**

## Manipulating Qubits: Quantum Computers

To manipulate Qubits in a way that we can "program", we need Quantum Computers. However, building a Quantum
Computer is **expensive**, hence why only companies like IBM or Google, just to name them, have built some.

Quantum Computers usually have a limited number of Qubits available, and this, for good reason: Qubits are
finicky to manipulate, as they are subject to a concept known as Quantum Decoherence. Simply put,
Quantum Decoherence is essentially **the loss of information due to the environment**. This loss of information
can be introduced by noise, temperature, literally any factor.

Because of this, it is common for Quantum Computers to manipulate Qubits at a very low temperature (usually
**a few degrees kelvin, so close to absolute zero**), in order to minimize the potential factors that can
induce noise/decoherence in the Qubit's environment. However, potential breakthroughs and advances may allow
Quantum Computers to operate at higher temperatures in the future.

To get back to the usefulness of Quantum Computers, their main advantage is that they can be programmed with
Quantum Circuits. These circuits, which are made out of Quantum Gates, manipulate the Qubits that go through
them, altering their state according to the logic of each gate they encounter. In a way, this means that
**it is possible to use Quantum Circuits to create the quantum computer equivalent of algorithms.**

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

- Hidary J.D. (2019) A Brief History of Quantum Computing. In: Quantum Computing: An Applied Approach. Springer, Cham. https://doi.org/10.1007/978-3-030-23922-0_2

- quantumly.com. (n.d.). Timeline of Quantum Computers and the History of Quantum Computing by Date. \[online\] Available at: http://quantumly.com/timeline-of-quantum-computing-history-of-quantum-computers-dates.html. \[Accessed 27 Feb. 2021\].

- Non-Dominated Quantum Iterative Routing Optimization for Wireless Multihop Networks - Scientific Figure on ResearchGate. Available from: https://www.researchgate.net/figure/Timeline-of-quantum-computing-milestones_fig13_281970628 [Accessed 27 Feb, 2021].

- Wikipedia Contributors (2020). Bloch sphere. \[online\] Wikipedia. Available at: https://en.wikipedia.org/wiki/Bloch_sphere.

- Ono, K., Mori, T. and Moriyama, S. (2019). High-temperature operation of a silicon qubit. Scientific Reports, \[online\] 9(1). Available at: https://arxiv.org/ftp/arxiv/papers/1804/1804.03364.pdf [Accessed 14 Feb. 2021].

- Krinner, S., Storz, S., Kurpiers, P., Magnard, P., Heinsoo, J., Keller, R., Lütolf, J., Eichler, C. and Wallraff, A. (2019). Engineering cryogenic setups for 100-qubit scale superconducting circuit systems. EPJ Quantum Technology, 6(1). Available at: https://doi.org/10.1140/epjqt/s40507-019-0072-0 [Accessed 14 Feb. 2021].

- Ruiz, A.D.L.F., 2014. Quantum annealing. arXiv preprint arXiv:1404.2465. Available at: https://arxiv.org/abs/1404.2465

- docs.dwavesys.com. (n.d.). Introduction to Quantum Annealing — D-Wave System Documentation documentation. \[online\] Available at: https://docs.dwavesys.com/docs/latest/c_gs_2.html.

- Farahzad, M. you.stonybrook.edu. (n.d.). 3. A Light Introduction to Bloch Sphere – Quantum Computing. \[online\] Available at: https://you.stonybrook.edu/qcomputing/2018/07/06/bloch-sphere/ \[Accessed 17 Feb. 2021\].

[felix-bloch]: https://en.wikipedia.org/wiki/Felix_Bloch
