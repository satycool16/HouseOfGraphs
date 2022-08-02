import styles from "../MetaDirectory.module.css";
import {BiLinkExternal} from "react-icons/bi";

const MinimalCayley = () => {
  return (
    <div>
      <h3>Minimal Cayley graphs</h3>
      <p> An undirected graph <i>G</i> is a <i>minimal</i> Cayley graph if there is a group &Gamma; with an inclusion-minimal inverse-closed 
        generating set <i>C</i> such that the Cayley graph <i>Cay(&Gamma;,C)</i> is isomorphic to <i>G</i>. Minimal Cayley graphs are still not 
        well-understood. A very famous problem usually attributed to Lovász <a href={"#ref1"}>[1]</a> asks whether they are all Hamiltonian.
        Another problem is whether their chromatic number is bounded by a global constant <i>c</i>. Babai has conjectured both that such a 
        constant exists <a href={"#ref2"}>[2]</a> and that it does not exist <a href={"#ref3"}>[3]</a>.</p>
      <p> Below are the lists of minimal Cayley graphs. These graphs were kindly provided to us 
        by <a href={"http://pageperso.lif.univ-mrs.fr/~kolja.knauer/"}>Kolja Knauer <BiLinkExternal/></a> who computed them using GAP and SageMath.
        The graph lists are currently only available in '<a href={"/help#format_g6"}>graph6</a>' format.</p>
      <div>
        <h5>Minimal Cayley graphs</h5>
        <table className={`${styles.table}`}>
          <thead>
          <tr>
            <th>Vertices</th>
            <th>No. of min. Cayley graphs</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>1</td>
            <td><a href={"/data/mincayley/minCayleyGraphs1Vertices.g6"}>1</a></td>
          </tr>
          <tr>
            <td>2</td>
            <td><a href={"/data/mincayley/minCayleyGraphs2Vertices.g6"}>1</a></td>
          </tr>
          <tr>
            <td>3</td>
            <td><a href={"/data/mincayley/minCayleyGraphs3Vertices.g6"}>1</a></td>
          </tr>
          <tr>
            <td>4</td>
            <td><a href={"/data/mincayley/minCayleyGraphs4Vertices.g6"}>1</a></td>
          </tr>
          <tr>
            <td>5</td>
            <td><a href={"/data/mincayley/minCayleyGraphs5Vertices.g6"}>1</a></td>
          </tr>
          <tr>
            <td>6</td>
            <td><a href={"/data/mincayley/minCayleyGraphs6Vertices.g6"}>2</a></td>
          </tr>
          <tr>
            <td>7</td>
            <td><a href={"/data/mincayley/minCayleyGraphs7Vertices.g6"}>1</a></td>
          </tr>
          <tr>
            <td>8</td>
            <td><a href={"/data/mincayley/minCayleyGraphs8Vertices.g6"}>3</a></td>
          </tr>
          <tr>
            <td>9</td>
            <td><a href={"/data/mincayley/minCayleyGraphs9Vertices.g6"}>2</a></td>
          </tr>
          <tr>
            <td>10</td>
            <td><a href={"/data/mincayley/minCayleyGraphs10Vertices.g6"}>2</a></td>
          </tr>
          <tr>
            <td>11</td>
            <td><a href={"/data/mincayley/minCayleyGraphs11Vertices.g6"}>1</a></td>
          </tr>
          <tr>
            <td>12</td>
            <td><a href={"/data/mincayley/minCayleyGraphs12Vertices.g6"}>7</a></td>
          </tr>
          <tr>
            <td>13</td>
            <td><a href={"/data/mincayley/minCayleyGraphs13Vertices.g6"}>1</a></td>
          </tr>
          <tr>
            <td>14</td>
            <td><a href={"/data/mincayley/minCayleyGraphs14Vertices.g6"}>2</a></td>
          </tr>
          <tr>
            <td>15</td>
            <td><a href={"/data/mincayley/minCayleyGraphs15Vertices.g6"}>2</a></td>
          </tr>
          <tr>
            <td>16</td>
            <td><a href={"/data/mincayley/minCayleyGraphs16Vertices.g6"}>9</a></td>
          </tr>
          <tr>
            <td>17</td>
            <td><a href={"/data/mincayley/minCayleyGraphs17Vertices.g6"}>1</a></td>
          </tr>
          <tr>
            <td>18</td>
            <td><a href={"/data/mincayley/minCayleyGraphs18Vertices.g6"}>9</a></td>
          </tr>
          <tr>
            <td>19</td>
            <td><a href={"/data/mincayley/minCayleyGraphs19Vertices.g6"}>1</a></td>
          </tr>
          <tr>
            <td>20</td>
            <td><a href={"/data/mincayley/minCayleyGraphs20Vertices.g6"}>8</a></td>
          </tr>
          <tr>
            <td>21</td>
            <td><a href={"/data/mincayley/minCayleyGraphs21Vertices.g6"}>4</a></td>
          </tr>
          <tr>
            <td>22</td>
            <td><a href={"/data/mincayley/minCayleyGraphs22Vertices.g6"}>2</a></td>
          </tr>
          <tr>
            <td>23</td>
            <td><a href={"/data/mincayley/minCayleyGraphs23Vertices.g6"}>1</a></td>
          </tr>
          <tr>
            <td>24</td>
            <td><a href={"/data/mincayley/minCayleyGraphs24Vertices.g6"}>37</a></td>
          </tr>
          <tr>
            <td>25</td>
            <td><a href={"/data/mincayley/minCayleyGraphs25Vertices.g6"}>2</a></td>
          </tr>
          <tr>
            <td>26</td>
            <td><a href={"/data/mincayley/minCayleyGraphs26Vertices.g6"}>2</a></td>
          </tr>
          <tr>
            <td>27</td>
            <td><a href={"/data/mincayley/minCayleyGraphs27Vertices.g6"}>7</a></td>
          </tr>
          <tr>
            <td>28</td>
            <td><a href={"/data/mincayley/minCayleyGraphs28Vertices.g6"}>6</a></td>
          </tr>
          <tr>
            <td>29</td>
            <td><a href={"/data/mincayley/minCayleyGraphs29Vertices.g6"}>1</a></td>
          </tr>
          <tr>
            <td>30</td>
            <td><a href={"/data/mincayley/minCayleyGraphs30Vertices.g6"}>17</a></td>
          </tr>
          <tr>
            <td>31</td>
            <td><a href={"/data/mincayley/minCayleyGraphs31Vertices.g6"}>1</a></td>
          </tr>
          <tr>
            <td>32</td>
            <td><a href={"/data/mincayley/minCayleyGraphs32Vertices.g6"}>55</a></td>
          </tr>
          <tr>
            <td>33</td>
            <td><a href={"/data/mincayley/minCayleyGraphs33Vertices.g6"}>2</a></td>
          </tr>
          <tr>
            <td>34</td>
            <td><a href={"/data/mincayley/minCayleyGraphs34Vertices.g6"}>2</a></td>
          </tr>
          <tr>
            <td>35</td>
            <td><a href={"/data/mincayley/minCayleyGraphs35Vertices.g6"}>2</a></td>
          </tr>
          <tr>
            <td>36</td>
            <td><a href={"/data/mincayley/minCayleyGraphs36Vertices.g6"}>53</a></td>
          </tr>
          <tr>
            <td>37</td>
            <td><a href={"/data/mincayley/minCayleyGraphs37Vertices.g6"}>1</a></td>
          </tr>
          <tr>
            <td>38</td>
            <td><a href={"/data/mincayley/minCayleyGraphs38Vertices.g6"}>2</a></td>
          </tr>
          <tr>
            <td>39</td>
            <td><a href={"/data/mincayley/minCayleyGraphs39Vertices.g6"}>4</a></td>
          </tr>
          <tr>
            <td>40</td>
            <td><a href={"/data/mincayley/minCayleyGraphs40Vertices.g6"}>40</a></td>
          </tr>
          <tr>
            <td>41</td>
            <td><a href={"/data/mincayley/minCayleyGraphs41Vertices.g6"}>1</a></td>
          </tr>
          <tr>
            <td>42</td>
            <td><a href={"/data/mincayley/minCayleyGraphs42Vertices.g6"}>29</a></td>
          </tr>
          <tr>
            <td>43</td>
            <td><a href={"/data/mincayley/minCayleyGraphs43Vertices.g6"}>1</a></td>
          </tr>
          <tr>
            <td>44</td>
            <td><a href={"/data/mincayley/minCayleyGraphs44Vertices.g6"}>7</a></td>
          </tr>
          <tr>
            <td>45</td>
            <td><a href={"/data/mincayley/minCayleyGraphs45Vertices.g6"}>7</a></td>
          </tr>
          <tr>
            <td>46</td>
            <td><a href={"/data/mincayley/minCayleyGraphs46Vertices.g6"}>2</a></td>
          </tr>
          <tr>
            <td>47</td>
            <td><a href={"/data/mincayley/minCayleyGraphs47Vertices.g6"}>1</a></td>
          </tr>
          <tr>
            <td>48</td>
            <td><a href={"/data/mincayley/minCayleyGraphs48Vertices.g6"}>275</a></td>
          </tr>
          <tr>
            <td>49</td>
            <td><a href={"/data/mincayley/minCayleyGraphs49Vertices.g6"}>2</a></td>
          </tr>
          <tr>
            <td>50</td>
            <td><a href={"/data/mincayley/minCayleyGraphs50Vertices.g6"}>12</a></td>
          </tr>
          <tr>
            <td>51</td>
            <td><a href={"/data/mincayley/minCayleyGraphs51Vertices.g6"}>2</a></td>
          </tr>
          <tr>
            <td>52</td>
            <td><a href={"/data/mincayley/minCayleyGraphs52Vertices.g6"}>10</a></td>
          </tr>
          <tr>
            <td>53</td>
            <td><a href={"/data/mincayley/minCayleyGraphs53Vertices.g6"}>1</a></td>
          </tr>
          <tr>
            <td>54</td>
            <td><a href={"/data/mincayley/minCayleyGraphs54Vertices.g6"}>78</a></td>
          </tr>
          <tr>
            <td>55</td>
            <td><a href={"/data/mincayley/minCayleyGraphs55Vertices.g6"}>7</a></td>
          </tr>
          <tr>
            <td>56</td>
            <td><a href={"/data/mincayley/minCayleyGraphs56Vertices.g6"}>38</a></td>
          </tr>
          <tr>
            <td>57</td>
            <td><a href={"/data/mincayley/minCayleyGraphs57Vertices.g6"}>4</a></td>
          </tr>
          <tr>
            <td>58</td>
            <td><a href={"/data/mincayley/minCayleyGraphs58Vertices.g6"}>2</a></td>
          </tr>
          <tr>
            <td>59</td>
            <td><a href={"/data/mincayley/minCayleyGraphs59Vertices.g6"}>1</a></td>
          </tr>
          <tr>
            <td>60</td>
            <td><a href={"/data/mincayley/minCayleyGraphs60Vertices.g6"}>145</a></td>
          </tr>
          <tr>
            <td>61</td>
            <td><a href={"/data/mincayley/minCayleyGraphs61Vertices.g6"}>1</a></td>
          </tr>
          <tr>
            <td>62</td>
            <td><a href={"/data/mincayley/minCayleyGraphs62Vertices.g6"}>2</a></td>
          </tr>
          <tr>
            <td>63</td>
            <td><a href={"/data/mincayley/minCayleyGraphs63Vertices.g6"}>16</a></td>
          </tr>
          <tr>
            <td>64</td>
            <td><a href={"/data/mincayley/minCayleyGraphs64Vertices.g6"}>728</a></td>
          </tr>
          <tr>
            <td>65</td>
            <td><a href={"/data/mincayley/minCayleyGraphs65Vertices.g6"}>2</a></td>
          </tr>
          <tr>
            <td>66</td>
            <td><a href={"/data/mincayley/minCayleyGraphs66Vertices.g6"}>24</a></td>
          </tr>
          <tr>
            <td>67</td>
            <td><a href={"/data/mincayley/minCayleyGraphs67Vertices.g6"}>1</a></td>
          </tr>
          <tr>
            <td>68</td>
            <td><a href={"/data/mincayley/minCayleyGraphs68Vertices.g6"}>11</a></td>
          </tr>
          <tr>
            <td>69</td>
            <td><a href={"/data/mincayley/minCayleyGraphs69Vertices.g6"}>2</a></td>
          </tr>
          <tr>
            <td>70</td>
            <td><a href={"/data/mincayley/minCayleyGraphs70Vertices.g6"}>22</a></td>
          </tr>
          <tr>
            <td>71</td>
            <td><a href={"/data/mincayley/minCayleyGraphs71Vertices.g6"}>1</a></td>
          </tr>
          <tr>
            <td>72</td>
            <td><a href={"/data/mincayley/minCayleyGraphs72Vertices.g6"}>547</a></td>
          </tr>
          <tr>
            <td>73</td>
            <td><a href={"/data/mincayley/minCayleyGraphs73Vertices.g6"}>1</a></td>
          </tr>
          <tr>
            <td>74</td>
            <td><a href={"/data/mincayley/minCayleyGraphs74Vertices.g6"}>2</a></td>
          </tr>
          <tr>
            <td>75</td>
            <td><a href={"/data/mincayley/minCayleyGraphs75Vertices.g6"}>9</a></td>
          </tr>
          <tr>
            <td>76</td>
            <td><a href={"/data/mincayley/minCayleyGraphs76Vertices.g6"}>9</a></td>
          </tr>
          <tr>
            <td>77</td>
            <td><a href={"/data/mincayley/minCayleyGraphs77Vertices.g6"}>2</a></td>
          </tr>
          <tr>
            <td>78</td>
            <td><a href={"/data/mincayley/minCayleyGraphs78Vertices.g6"}>37</a></td>
          </tr>
          <tr>
            <td>79</td>
            <td><a href={"/data/mincayley/minCayleyGraphs79Vertices.g6"}>1</a></td>
          </tr>
          <tr>
            <td>80</td>
            <td><a href={"/data/mincayley/minCayleyGraphs80Vertices.g6"}>360</a></td>
          </tr>
          <tr>
            <td>81</td>
            <td><a href={"/data/mincayley/minCayleyGraphs81Vertices.g6"}>50</a></td>
          </tr>
          <tr>
            <td>82</td>
            <td><a href={"/data/mincayley/minCayleyGraphs82Vertices.g6"}>2</a></td>
          </tr>
          <tr>
            <td>83</td>
            <td><a href={"/data/mincayley/minCayleyGraphs83Vertices.g6"}>1</a></td>
          </tr>
          <tr>
            <td>84</td>
            <td><a href={"/data/mincayley/minCayleyGraphs84Vertices.g6"}>196</a></td>
          </tr>
          <tr>
            <td>85</td>
            <td><a href={"/data/mincayley/minCayleyGraphs85Vertices.g6"}>2</a></td>
          </tr>
          <tr>
            <td>86</td>
            <td><a href={"/data/mincayley/minCayleyGraphs86Vertices.g6"}>2</a></td>
          </tr>
          <tr>
            <td>87</td>
            <td><a href={"/data/mincayley/minCayleyGraphs87Vertices.g6"}>2</a></td>
          </tr>
          <tr>
            <td>88</td>
            <td><a href={"/data/mincayley/minCayleyGraphs88Vertices.g6"}>46</a></td>
          </tr>
          <tr>
            <td>89</td>
            <td><a href={"/data/mincayley/minCayleyGraphs89Vertices.g6"}>1</a></td>
          </tr>
          <tr>
            <td>90</td>
            <td><a href={"/data/mincayley/minCayleyGraphs90Vertices.g6"}>133</a></td>
          </tr>
          <tr>
            <td>91</td>
            <td><a href={"/data/mincayley/minCayleyGraphs91Vertices.g6"}>2</a></td>
          </tr>
          <tr>
            <td>92</td>
            <td><a href={"/data/mincayley/minCayleyGraphs92Vertices.g6"}>10</a></td>
          </tr>
          <tr>
            <td>93</td>
            <td><a href={"/data/mincayley/minCayleyGraphs93Vertices.g6"}>4</a></td>
          </tr>
          <tr>
            <td>94</td>
            <td><a href={"/data/mincayley/minCayleyGraphs94Vertices.g6"}>2</a></td>
          </tr>
          <tr>
            <td>95</td>
            <td><a href={"/data/mincayley/minCayleyGraphs95Vertices.g6"}>2</a></td>
          </tr>
          </tbody>
        </table>
      </div>
      <div className={`${styles.references}`}>
        <h5>References</h5>
        <p id={"ref1"}>[1] László Lovász, Combinatorial problems and exercises, American Mathematical Society, 2007.</p>
        <p id={"ref2"}>[2] László Babai, Chromatic number and subgraphs of Cayley graphs, Theory and Applications of Graphs, in Proc. Kalamazoo 1976, Lect. Notes Math., vol. 642, pp. 10-22, 1978.</p>
        <p id={"ref3"}>[3] László Babai, Automorphism groups, isomorphism, reconstruction, in Handbook of Combinatorics, vol. 1-2, pages 1447–1540, Elsevier (North-Holland), 1995.</p>
      </div>
      <br/>
    </div>
  );
}

export default MinimalCayley;