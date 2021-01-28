<h1 class="centered">Lab 1 - Setting up a Qiskit Environment</h1>

## Introduction

The goal of the Lab Exercises is to reinforce what has been learned during the lessons by providing
practical exercises about Quantum Computing. In the lab exercises, a Python framework made by IBM,
named Qiskit will be used. The official website is located at https://qiskit.org and contains documentation
if needed.

## Setting up Python

(If you already have Python 3.6 or higher or Anaconda, skip to the next section)

<h3 class="h3-subheader">Windows (x86/x64 CPUs only) & Mac OS X (x86-64, see 3. for Apple Silicon (M1 chips) devices)</h3>

1. Head to the Python official website, on the Downloads section (Link: https://www.python.org/downloads/release)

2. Select the most recent version (at the time of writing, it is version 3.9.1), by clicking the “Download” button in the appropriate row.

3. Select the installer that fits your need. If you are using a recent Apple device that came with the Apple M1 processor, please use the universal2 installer, but keep in mind it is still experimental and issues may arise.

4. If you are using a Windows device, when running the installer, I advise ticking the “Add to PATH” option and selecting the “Customize Installation” option. You can then set the checkboxes as follows (You can still enable the checkboxes if you wish):

<img class="img-block centered" src="img/lab01/python-install-guide-1.png">

5. Continue until the installer finishes and see if you can access Python by typing “py” or “python” in a terminal. If you can get to the Python command prompt, you can exit by typing exit() then pressing the Return key.


## Setting up a Qiskit Environment with Python or Anaconda

Now, we are going to create a virtual environment in which Qiskit code will be executed. 
The advantage of this approach is that we can then take the folder and transfer it to another machine which has Python or Anaconda installed to resume work or for demonstration purposes.

<h3 class="h3-subheader">Instructions for Python</h3>

1. Create an empty folder, named as you wish.
2. Open a terminal, and move inside the folder.
3. Once you are inside the folder where you wish to create your virtual environment, enter the following command:
```
python3 -m venv <path-to-your-environment>
```
4. Now that the virtual environment has been created, activate it with the following command:
	* Windows: ```.\Scripts\activate```
	* Mac OS/Linux: ```source ```
5. Update the virtual environment's PIP (Python Package Installer) with the following command:
```
python -m pip install --upgrade pip
```
6. Install the Qiskit packages with the following command (Mac OS users: due to an issue with zsh (the terminal application), you need to insert the second package name between quotes, it has been done for you here):
```
pip install qiskit "qiskit[visualization]"
```
7. Qiskit also comes with Jupyter Notebook, an environment which allows the creation of "notebooks" which allows both text, visualizations and code. To start Jupyter Notebook in your browser, enter the following command:
```
jupyter notebook
```
8. Create a notebook, and check that Qiskit has been successfully installed by inserting the following line in one of the cells:
```python
import qiskit
```

If no error appears, it means that everything has been set up correctly, and you can move on to the next lab.

Note: Virtual Environments replace the Python and PIP executables from your operating system's PATH. If, you want
to restore them (to restore the PATH and leave the virtual environment mode in your prompt), it is recommended to
execute the deactivate script found in your virtual environment. This is as simple as running the following command:

```
deactivate
```

<h3 class="h3-subheader">Instructions for Anaconda</h3>

1. Create an empty folder, named as you wish.
2. Open a terminal, and move inside the folder.
3. Once you are inside the folder where you wish to create your virtual environment, enter the following command:
```
conda create -n environment_name python=3
```
4. Activate your virtual environment with the following command:
```
conda activate environment_name
```
5. Update Anaconda's PIP module (Python package installer) with the following command:
```
conda update pip
```
6. Install the Qiskit packages with the following command:
```
pip install qiskit "qiskit[visualization]"
```
7. Verify that you can invoke Jupyter Notebook by entering the following command:
```
jupyter notebook
```
8. Create a notebook, and check that Qiskit has been successfully installed by inserting the following line in one of the cells:
```python
import qiskit
```

If no error appears, it means that everything has been set up correctly, and you can move on to the next lab.

## Bonus: Ready-to-use Virtual Environment

If you are struggling to get your virtual environment to work, a ready-to-use Python virtual environment has
been packaged and is available [here][link-to-venv].

[link-to-venv]: https://drive.google.com/file/d/10OeTjNfBkmZns8LY2vfAc9HtQ2IdW2Ir/view?usp=sharing

## References

Python 3 Virtual Environment Documentation:

- https://docs.python.org/3/library/venv.html
- https://docs.python.org/3/tutorial/venv.html
- https://packaging.python.org/guides/installing-using-pip-and-virtual-environments/

Installing Qiskit:

- https://qiskit.org/documentation/install.html