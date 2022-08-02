Invariants in C++
===

Example of a C++-program that computes invariants of graphs.

Program `degrees`
* Input (stdin) a list of graphs in `graph6` format, one for each line
* Output (stdout) for each graph, a line with minimum degree, maximum degree and regularity (boolean). Separated by spaces, true/false for boolean.
* Only supports graphs up to order 300. If a graphs is read that is larger, a blank line is output. A blank line is
  also output when the graph has order 0 (but maybe this graph should not be allowed?)

Code derived from NutFilter project 2016 (c) Ghent University
