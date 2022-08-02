import styles from "../MetaDirectory.module.css";
import {BiLinkExternal} from "react-icons/bi";

const Fullerenes = () => {
  return (
    <div>
      <h3>Fullerenes</h3>
      <p> Fullerenes are cubic plane graphs where all faces are pentagons or hexagons. Euler's formula implies that each fullerene
        contains exactly 12 pentagonal faces. The dual graph of a fullerene is a triangulation where all vertices have degree 5 or 6. </p>
      <p> The fullerene lists are currently only available in 'planar_code' format. The larger files are compressed with gzip. </p>
      <div className={`${styles.content}`}>
        <p>The following lists are available:</p>
        <ul>
          <li><a href={"#ful"}>Fullerenes</a></li>
          <li><a href={"#ful_no_spiral_pent"}>Fullerenes without a spiral starting at a pentagon</a></li>
          <li><a href={"#ful_no_spiral"}>Fullerenes without a spiral</a></li>
        </ul>
      </div>
      <p> The 'face-distance' between two pentagons is the distance between the corresponding vertices of degree 5 in the dual graph.
        We refer to the least face-distance between pentagons of a fullerene as the 'pentagon separation' of the fullerene.
        The table below lists the number of fullerenes up to 400 vertices with pentagon separation at least d. Note that d=1 gives the set
        of all fullerenes and d=2 gives the set of all IPR fullerenes. More information about the pentagon separation of fullerenes
        can be found in <a href={"#ref1"}>[1]</a>.</p>
      <p> All fullerene and IPR fullerene counts up to 380 vertices were independently confirmed
        by <a href={"http://cs.anu.edu.au/~bdm/plantri/"}>fullgen <BiLinkExternal/></a> and <a href={"http://caagt.ugent.be/buckygen/"}>buckygen <BiLinkExternal/></a>.
        The fullerenes with more than 380 vertices were generated with <a href={"http://caagt.ugent.be/buckygen/"}>buckygen <BiLinkExternal/></a>. </p>
      <p> The fullerenes in the downloadable lists from the "Fullerenes"-table are sorted according to their lexicographically minimal
        spiral development. So the order in which they appear is the same as in the Atlas of Fullerenes <a href={"#ref2"}>[2]</a>.
        More information about spirals in fullerenes can be found in <a href={"#ref3"}>[3]</a>.</p>
      <div id={"ful"}>
        <h5>Fullerenes</h5>
        <table className={`${styles.table}`}>
          <thead>
          <tr>
            <th>Vertices</th>
            <th>Faces</th>
            <th>Fullerenes</th>
            <th>IPR Fullerenes</th>
            <th>Pent. sep. ≥ 3</th>
            <th>Pent. sep. ≥ 4</th>
            <th>Pent. sep. ≥ 5</th>
          </tr>
          </thead>
          <tbody>
            <tr><td>20</td><td>12</td><td><a href={"/data/fullerenes/Fullerenes_20"}>1</a></td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>22</td><td>13</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>24</td><td>14</td><td><a href={"/data/fullerenes/Fullerenes_24"}>1</a></td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>26</td><td>15</td><td><a href={"/data/fullerenes/Fullerenes_26"}>1</a></td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>28</td><td>16</td><td><a href={"/data/fullerenes/Fullerenes_28"}>2</a></td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>30</td><td>17</td><td><a href={"/data/fullerenes/Fullerenes_30"}>3</a></td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>32</td><td>18</td><td><a href={"/data/fullerenes/Fullerenes_32"}>6</a></td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>34</td><td>19</td><td><a href={"/data/fullerenes/Fullerenes_34"}>6</a></td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>36</td><td>20</td><td><a href={"/data/fullerenes/Fullerenes_36"}>15</a></td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>38</td><td>21</td><td><a href={"/data/fullerenes/Fullerenes_38"}>17</a></td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>40</td><td>22</td><td><a href={"/data/fullerenes/Fullerenes_40"}>40</a></td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>42</td><td>23</td><td><a href={"/data/fullerenes/Fullerenes_42"}>45</a></td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>44</td><td>24</td><td><a href={"/data/fullerenes/Fullerenes_44"}>89</a></td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>46</td><td>25</td><td><a href={"/data/fullerenes/Fullerenes_46"}>116</a></td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>48</td><td>26</td><td><a href={"/data/fullerenes/Fullerenes_48"}>199</a></td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>50</td><td>27</td><td><a href={"/data/fullerenes/Fullerenes_50"}>271</a></td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>52</td><td>28</td><td><a href={"/data/fullerenes/Fullerenes_52"}>437</a></td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>54</td><td>29</td><td><a href={"/data/fullerenes/Fullerenes_54"}>580</a></td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>56</td><td>30</td><td><a href={"/data/fullerenes/Fullerenes_56"}>924</a></td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>58</td><td>31</td><td><a href={"/data/fullerenes/Fullerenes_58"}>1205</a></td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>60</td><td>32</td><td><a href={"/data/fullerenes/Fullerenes_60"}>1812</a></td><td><a href={"/data/fullerenes/ipr/Fullerenes_60_ipr"}>1</a></td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>62</td><td>33</td><td><a href={"/data/fullerenes/Fullerenes_62.gz"}>2385</a></td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>64</td><td>34</td><td><a href={"/data/fullerenes/Fullerenes_64.gz"}>3465</a></td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>66</td><td>35</td><td><a href={"/data/fullerenes/Fullerenes_66.gz"}>4478</a></td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>68</td><td>36</td><td><a href={"/data/fullerenes/Fullerenes_68.gz"}>6332</a></td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>70</td><td>37</td><td><a href={"/data/fullerenes/Fullerenes_70.gz"}>8149</a></td><td><a href={"/data/fullerenes/ipr/Fullerenes_70_ipr"}>1</a></td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>72</td><td>38</td><td><a href={"/data/fullerenes/Fullerenes_72.gz"}>11190</a></td><td><a href={"/data/fullerenes/ipr/Fullerenes_72_ipr"}>1</a></td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>74</td><td>39</td><td><a href={"/data/fullerenes/Fullerenes_74.gz"}>14246</a></td><td><a href={"/data/fullerenes/ipr/Fullerenes_74_ipr"}>1</a></td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>76</td><td>40</td><td><a href={"/data/fullerenes/Fullerenes_76.gz"}>19151</a></td><td><a href={"/data/fullerenes/ipr/Fullerenes_76_ipr"}>2</a></td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>78</td><td>41</td><td><a href={"/data/fullerenes/Fullerenes_78.gz"}>24109</a></td><td><a href={"/data/fullerenes/ipr/Fullerenes_78_ipr"}>5</a></td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>80</td><td>42</td><td><a href={"/data/fullerenes/Fullerenes_80.gz"}>31924</a></td><td><a href={"/data/fullerenes/ipr/Fullerenes_80_ipr"}>7</a></td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>82</td><td>43</td><td><a href={"/data/fullerenes/Fullerenes_82.gz"}>39718</a></td><td><a href={"/data/fullerenes/ipr/Fullerenes_82_ipr"}>9</a></td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>84</td><td>44</td><td><a href={"/data/fullerenes/Fullerenes_84.gz"}>51592</a></td><td><a href={"/data/fullerenes/ipr/Fullerenes_84_ipr"}>24</a></td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>86</td><td>45</td><td><a href={"/data/fullerenes/Fullerenes_86.gz"}>63761</a></td><td><a href={"/data/fullerenes/ipr/Fullerenes_86_ipr"}>19</a></td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>88</td><td>46</td><td><a href={"/data/fullerenes/Fullerenes_88.gz"}>81738</a></td><td><a href={"/data/fullerenes/ipr/Fullerenes_88_ipr"}>35</a></td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>90</td><td>47</td><td><a href={"/data/fullerenes/Fullerenes_90.gz"}>99918</a></td><td><a href={"/data/fullerenes/ipr/Fullerenes_90_ipr"}>46</a></td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>92</td><td>48</td><td><a href={"/data/fullerenes/Fullerenes_92.gz"}>126409</a></td><td><a href={"/data/fullerenes/ipr/Fullerenes_92_ipr"}>86</a></td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>94</td><td>49</td><td><a href={"/data/fullerenes/Fullerenes_94.gz"}>153493</a></td><td><a href={"/data/fullerenes/ipr/Fullerenes_94_ipr"}>134</a></td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>96</td><td>50</td><td><a href={"/data/fullerenes/Fullerenes_96.gz"}>191839</a></td><td><a href={"/data/fullerenes/ipr/Fullerenes_96_ipr"}>187</a></td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>98</td><td>51</td><td><a href={"/data/fullerenes/Fullerenes_98.gz"}>231017</a></td><td><a href={"/data/fullerenes/ipr/Fullerenes_98_ipr"}>259</a></td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>100</td><td>52</td><td><a href={"/data/fullerenes/Fullerenes_100.gz"}>285914</a></td><td><a href={"/data/fullerenes/ipr/Fullerenes_100_ipr"}>450</a></td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>102</td><td>53</td><td><a href={"/data/fullerenes/Fullerenes_102.gz"}>341658</a></td><td><a href={"/data/fullerenes/ipr/Fullerenes_102_ipr"}>616</a></td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>104</td><td>54</td><td><a href={"/data/fullerenes/Fullerenes_104.gz"}>419013</a></td><td><a href={"/data/fullerenes/ipr/Fullerenes_104_ipr"}>823</a></td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>106</td><td>55</td><td><a href={"/data/fullerenes/Fullerenes_106.gz"}>497529</a></td><td><a href={"/data/fullerenes/ipr/Fullerenes_106_ipr"}>1233</a></td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>108</td><td>56</td><td><a href={"/data/fullerenes/Fullerenes_108.gz"}>604217</a></td><td><a href={"/data/fullerenes/ipr/Fullerenes_108_ipr"}>1799</a></td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>110</td><td>57</td><td><a href={"/data/fullerenes/Fullerenes_110.gz"}>713319</a></td><td><a href={"/data/fullerenes/ipr/Fullerenes_110_ipr.gz"}>2355</a></td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>112</td><td>58</td><td><a href={"/data/fullerenes/Fullerenes_112.gz"}>860161</a></td><td><a href={"/data/fullerenes/ipr/Fullerenes_112_ipr.gz"}>3342</a></td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>114</td><td>59</td><td><a href={"/data/fullerenes/Fullerenes_114.gz"}>1008444</a></td><td><a href={"/data/fullerenes/ipr/Fullerenes_114_ipr.gz"}>4468</a></td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>116</td><td>60</td><td><a href={"/data/fullerenes/Fullerenes_116.gz"}>1207119</a></td><td><a href={"/data/fullerenes/ipr/Fullerenes_116_ipr.gz"}>6063</a></td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>118</td><td>61</td><td><a href={"/data/fullerenes/Fullerenes_118.gz"}>1408553</a></td><td><a href={"/data/fullerenes/ipr/Fullerenes_118_ipr.gz"}>8148</a></td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>120</td><td>62</td><td><a href={"/data/fullerenes/Fullerenes_120.gz"}>1674171</a></td><td><a href={"/data/fullerenes/ipr/Fullerenes_120_ipr.gz"}>10774</a></td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>122</td><td>63</td><td><a href={"/data/fullerenes/Fullerenes_122.gz"}>1942929</a></td><td><a href={"/data/fullerenes/ipr/Fullerenes_122_ipr.gz"}>13977</a></td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>124</td><td>64</td><td><a href={"/data/fullerenes/Fullerenes_124.gz"}>2295721</a></td><td><a href={"/data/fullerenes/ipr/Fullerenes_124_ipr.gz"}>18769</a></td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>126</td><td>65</td><td><a href={"/data/fullerenes/Fullerenes_126.gz"}>2650866</a></td><td><a href={"/data/fullerenes/ipr/Fullerenes_126_ipr.gz"}>23589</a></td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>128</td><td>66</td><td><a href={"/data/fullerenes/Fullerenes_128.gz"}>3114236</a></td><td><a href={"/data/fullerenes/ipr/Fullerenes_128_ipr.gz"}>30683</a></td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>130</td><td>67</td><td><a href={"/data/fullerenes/Fullerenes_130.gz"}>3580637</a></td><td><a href={"/data/fullerenes/ipr/Fullerenes_130_ipr.gz"}>39393</a></td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>132</td><td>68</td><td>4182071</td><td><a href={"/data/fullerenes/ipr/Fullerenes_132_ipr.gz"}>49878</a></td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>134</td><td>69</td><td>4787715</td><td><a href={"/data/fullerenes/ipr/Fullerenes_134_ipr.gz"}>62372</a></td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>136</td><td>70</td><td>5566949</td><td><a href={"/data/fullerenes/ipr/Fullerenes_136_ipr.gz"}>79362</a></td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>138</td><td>71</td><td>6344698</td><td><a href={"/data/fullerenes/ipr/Fullerenes_138_ipr.gz"}>98541</a></td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>140</td><td>72</td><td>7341204</td><td><a href={"/data/fullerenes/ipr/Fullerenes_140_ipr.gz"}>121354</a></td><td><a href={"/data/fullerenes/pentagon_separation/Fullerene_140_min_pent_dist3.pl"}>1</a></td><td>0</td><td>0</td></tr>
            <tr><td>142</td><td>73</td><td>8339033</td><td><a href={"/data/fullerenes/ipr/Fullerenes_142_ipr.gz"}>151201</a></td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>144</td><td>74</td><td>9604411</td><td><a href={"/data/fullerenes/ipr/Fullerenes_144_ipr.gz"}>186611</a></td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>146</td><td>75</td><td>10867631</td><td><a href={"/data/fullerenes/ipr/Fullerenes_146_ipr.gz"}>225245</a></td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>148</td><td>76</td><td>12469092</td><td><a href={"/data/fullerenes/ipr/Fullerenes_148_ipr.gz"}>277930</a></td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>150</td><td>77</td><td>14059174</td><td><a href={"/data/fullerenes/ipr/Fullerenes_150_ipr.gz"}>335569</a></td><td>1</td><td>0</td><td>0</td></tr>
            <tr><td>152</td><td>78</td><td>16066025</td><td><a href={"/data/fullerenes/ipr/Fullerenes_152_ipr.gz"}>404667</a></td><td>2</td><td>0</td><td>0</td></tr>
            <tr><td>154</td><td>79</td><td>18060979</td><td><a href={"/data/fullerenes/ipr/Fullerenes_154_ipr.gz"}>489646</a></td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>156</td><td>80</td><td>20558767</td><td><a href={"/data/fullerenes/ipr/Fullerenes_156_ipr.gz"}>586264</a></td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>158</td><td>81</td><td>23037594</td><td><a href={"/data/fullerenes/ipr/Fullerenes_158_ipr.gz"}>697720</a></td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>160</td><td>82</td><td>26142839</td><td><a href={"/data/fullerenes/ipr/Fullerenes_160_ipr.gz"}>836497</a></td><td>2</td><td>0</td><td>0</td></tr>
            <tr><td>162</td><td>83</td><td>29202543</td><td>989495</td><td>1</td><td>0</td><td>0</td></tr>
            <tr><td>164</td><td>84</td><td>33022573</td><td>1170157</td><td>2</td><td>0</td><td>0</td></tr>
            <tr><td>166</td><td>85</td><td>36798433</td><td>1382953</td><td>1</td><td>0</td><td>0</td></tr>
            <tr><td>168</td><td>86</td><td>41478344</td><td>1628029</td><td>13</td><td>0</td><td>0</td></tr>
            <tr><td>170</td><td>87</td><td>46088157</td><td>1902265</td><td>4</td><td>0</td><td>0</td></tr>
            <tr><td>172</td><td>88</td><td>51809031</td><td>2234133</td><td>12</td><td>0</td><td>0</td></tr>
            <tr><td>174</td><td>89</td><td>57417264</td><td>2601868</td><td>10</td><td>0</td><td>0</td></tr>
            <tr><td>176</td><td>90</td><td>64353269</td><td>3024383</td><td>28</td><td>0</td><td>0</td></tr>
            <tr><td>178</td><td>91</td><td>71163452</td><td>3516365</td><td>23</td><td>0</td><td>0</td></tr>
            <tr><td>180</td><td>92</td><td>79538751</td><td>4071832</td><td>58</td><td>0</td><td>0</td></tr>
            <tr><td>182</td><td>93</td><td>87738311</td><td>4690880</td><td>54</td><td>0</td><td>0</td></tr>
            <tr><td>184</td><td>94</td><td>97841183</td><td>5424777</td><td>142</td><td>0</td><td>0</td></tr>
            <tr><td>186</td><td>95</td><td>107679717</td><td>6229550</td><td>129</td><td>0</td><td>0</td></tr>
            <tr><td>188</td><td>96</td><td>119761075</td><td>7144091</td><td>291</td><td>0</td><td>0</td></tr>
            <tr><td>190</td><td>97</td><td>131561744</td><td>8187581</td><td>257</td><td>0</td><td>0</td></tr>
            <tr><td>192</td><td>98</td><td>145976674</td><td>9364975</td><td>548</td><td>0</td><td>0</td></tr>
            <tr><td>194</td><td>99</td><td>159999462</td><td>10659863</td><td>566</td><td>0</td><td>0</td></tr>
            <tr><td>196</td><td>100</td><td>177175687</td><td>12163298</td><td>1126</td><td>0</td><td>0</td></tr>
            <tr><td>198</td><td>101</td><td>193814658</td><td>13809901</td><td>1072</td><td>0</td><td>0</td></tr>
            <tr><td>200</td><td>102</td><td>214127742</td><td>15655672</td><td>1943</td><td>0</td><td>0</td></tr>
            <tr><td>202</td><td>103</td><td>233846463</td><td>17749388</td><td>2080</td><td>0</td><td>0</td></tr>
            <tr><td>204</td><td>104</td><td>257815889</td><td>20070486</td><td>3682</td><td>0</td><td>0</td></tr>
            <tr><td>206</td><td>105</td><td>281006325</td><td>22606939</td><td>3992</td><td>0</td><td>0</td></tr>
            <tr><td>208</td><td>106</td><td>309273526</td><td>25536557</td><td>6340</td><td>0</td><td>0</td></tr>
            <tr><td>210</td><td>107</td><td>336500830</td><td>28700677</td><td>6737</td><td>0</td><td>0</td></tr>
            <tr><td>212</td><td>108</td><td>369580714</td><td>32230861</td><td>10513</td><td>0</td><td>0</td></tr>
            <tr><td>214</td><td>109</td><td>401535955</td><td>36173081</td><td>12000</td><td>0</td><td>0</td></tr>
            <tr><td>216</td><td>110</td><td>440216206</td><td>40536922</td><td>18169</td><td>0</td><td>0</td></tr>
            <tr><td>218</td><td>111</td><td>477420176</td><td>45278722</td><td>20019</td><td>0</td><td>0</td></tr>
            <tr><td>220</td><td>112</td><td>522599564</td><td>50651799</td><td>28528</td><td>0</td><td>0</td></tr>
            <tr><td>222</td><td>113</td><td>565900181</td><td>56463948</td><td>32276</td><td>0</td><td>0</td></tr>
            <tr><td>224</td><td>114</td><td>618309598</td><td>62887775</td><td>46534</td><td>0</td><td>0</td></tr>
            <tr><td>226</td><td>115</td><td>668662698</td><td>69995887</td><td>52177</td><td>0</td><td>0</td></tr>
            <tr><td>228</td><td>116</td><td>729414880</td><td>77831323</td><td>71303</td><td>0</td><td>0</td></tr>
            <tr><td>230</td><td>117</td><td>787556069</td><td>86238206</td><td>79915</td><td>0</td><td>0</td></tr>
            <tr><td>232</td><td>118</td><td>857934016</td><td>95758929</td><td>109848</td><td>0</td><td>0</td></tr>
            <tr><td>234</td><td>119</td><td>925042498</td><td>105965373</td><td>124153</td><td>0</td><td>0</td></tr>
            <tr><td>236</td><td>120</td><td>1006016526</td><td>117166528</td><td>164700</td><td>0</td><td>0</td></tr>
            <tr><td>238</td><td>121</td><td>1083451816</td><td>129476607</td><td>184404</td><td>0</td><td>0</td></tr>
            <tr><td>240</td><td>122</td><td>1176632247</td><td>142960479</td><td>242507</td><td><a href={"/data/fullerenes/pentagon_separation/Fullerene_240_min_pent_dist4.pl"}>1</a></td><td>0</td></tr>
            <tr><td>242</td><td>123</td><td>1265323971</td><td>157402781</td><td>273885</td><td>0</td><td>0</td></tr>
            <tr><td>244</td><td>124</td><td>1372440782</td><td>173577766</td><td>353997</td><td>0</td><td>0</td></tr>
            <tr><td>246</td><td>125</td><td>1474111053</td><td>190809628</td><td>397673</td><td>0</td><td>0</td></tr>
            <tr><td>248</td><td>126</td><td>1596482232</td><td>209715141</td><td>507913</td><td>0</td><td>0</td></tr>
            <tr><td>250</td><td>127</td><td>1712934069</td><td>230272559</td><td>570053</td><td>0</td><td>0</td></tr>
            <tr><td>252</td><td>128</td><td>1852762875</td><td>252745513</td><td>717983</td><td>0</td><td>0</td></tr>
            <tr><td>254</td><td>129</td><td>1985250572</td><td>276599787</td><td>805374</td><td>0</td><td>0</td></tr>
            <tr><td>256</td><td>130</td><td>2144943655</td><td>303235792</td><td>1007680</td><td>0</td><td>0</td></tr>
            <tr><td>258</td><td>131</td><td>2295793276</td><td>331516984</td><td>1127989</td><td>0</td><td>0</td></tr>
            <tr><td>260</td><td>132</td><td>2477017558</td><td>362302637</td><td>1392996</td><td>2</td><td>0</td></tr>
            <tr><td>262</td><td>133</td><td>2648697036</td><td>395600325</td><td>1550580</td><td>0</td><td>0</td></tr>
            <tr><td>264</td><td>134</td><td>2854536850</td><td>431894257</td><td>1905849</td><td>0</td><td>0</td></tr>
            <tr><td>266</td><td>135</td><td>3048609900</td><td>470256444</td><td>2124873</td><td>1</td><td>0</td></tr>
            <tr><td>268</td><td>136</td><td>3282202941</td><td>512858451</td><td>2592104</td><td>1</td><td>0</td></tr>
            <tr><td>270</td><td>137</td><td>3501931260</td><td>557745670</td><td>2868467</td><td>2</td><td>0</td></tr>
            <tr><td>272</td><td>138</td><td>3765465341</td><td>606668511</td><td>3461487</td><td>1</td><td>0</td></tr>
            <tr><td>274</td><td>139</td><td>4014007928</td><td>659140287</td><td>3847594</td><td>0</td><td>0</td></tr>
            <tr><td>276</td><td>140</td><td>4311652376</td><td>716217922</td><td>4621524</td><td>1</td><td>0</td></tr>
            <tr><td>278</td><td>141</td><td>4591045471</td><td>776165188</td><td>5112067</td><td>2</td><td>0</td></tr>
            <tr><td>280</td><td>142</td><td>4926987377</td><td>842498881</td><td>6079570</td><td>4</td><td>0</td></tr>
            <tr><td>282</td><td>143</td><td>5241548270</td><td>912274540</td><td>6726996</td><td>1</td><td>0</td></tr>
            <tr><td>284</td><td>144</td><td>5618445787</td><td>987874095</td><td>7971111</td><td>10</td><td>0</td></tr>
            <tr><td>286</td><td>145</td><td>5972426835</td><td>1068507788</td><td>8784514</td><td>3</td><td>0</td></tr>
            <tr><td>288</td><td>146</td><td>6395981131</td><td>1156161307</td><td>10352546</td><td>7</td><td>0</td></tr>
            <tr><td>290</td><td>147</td><td>6791769082</td><td>1247686189</td><td>11385724</td><td>9</td><td>0</td></tr>
            <tr><td>292</td><td>148</td><td>7267283603</td><td>1348832364</td><td>13357318</td><td>5</td><td>0</td></tr>
            <tr><td>294</td><td>149</td><td>7710782991</td><td>1454359806</td><td>14652198</td><td>6</td><td>0</td></tr>
            <tr><td>296</td><td>150</td><td>8241719706</td><td>1568768524</td><td>17102231</td><td>24</td><td>0</td></tr>
            <tr><td>298</td><td>151</td><td>8738236515</td><td>1690214836</td><td>18756139</td><td>16</td><td>0</td></tr>
            <tr><td>300</td><td>152</td><td>9332065811</td><td>1821766896</td><td>21766152</td><td>32</td><td>0</td></tr>
            <tr><td>302</td><td>153</td><td>9884604767</td><td>1958581588</td><td>23815310</td><td>36</td><td>0</td></tr>
            <tr><td>304</td><td>154</td><td>10548218751</td><td>2109271290</td><td>27529516</td><td>46</td><td>0</td></tr>
            <tr><td>306</td><td>155</td><td>11164542762</td><td>2266138871</td><td>30090574</td><td>54</td><td>0</td></tr>
            <tr><td>308</td><td>156</td><td>11902015724</td><td>2435848971</td><td>34629672</td><td>99</td><td>0</td></tr>
            <tr><td>310</td><td>157</td><td>12588998862</td><td>2614544391</td><td>37770691</td><td>93</td><td>0</td></tr>
            <tr><td>312</td><td>158</td><td>13410330482</td><td>2808510141</td><td>43312313</td><td>135</td><td>0</td></tr>
            <tr><td>314</td><td>159</td><td>14171344797</td><td>3009120113</td><td>47153778</td><td>187</td><td>0</td></tr>
            <tr><td>316</td><td>160</td><td>15085164571</td><td>3229731630</td><td>53899686</td><td>211</td><td>0</td></tr>
            <tr><td>318</td><td>161</td><td>15930619304</td><td>3458148016</td><td>58585441</td><td>308</td><td>0</td></tr>
            <tr><td>320</td><td>162</td><td>16942010457</td><td>3704939275</td><td>66712070</td><td>443</td><td>0</td></tr>
            <tr><td>322</td><td>163</td><td>17880232383</td><td>3964153268</td><td>72395888</td><td>535</td><td>0</td></tr>
            <tr><td>324</td><td>164</td><td>19002055537</td><td>4244706701</td><td>82171212</td><td>698</td><td>0</td></tr>
            <tr><td>326</td><td>165</td><td>20037346408</td><td>4533465777</td><td>89063353</td><td>1026</td><td>0</td></tr>
            <tr><td>328</td><td>166</td><td>21280571390</td><td>4850870260</td><td>100785130</td><td>1216</td><td>0</td></tr>
            <tr><td>330</td><td>167</td><td>22426253115</td><td>5178120469</td><td>109068073</td><td>1623</td><td>0</td></tr>
            <tr><td>332</td><td>168</td><td>23796620378</td><td>5531727283</td><td>122992213</td><td>2489</td><td>0</td></tr>
            <tr><td>334</td><td>169</td><td>25063227406</td><td>5900369830</td><td>132950223</td><td>2788</td><td>0</td></tr>
            <tr><td>336</td><td>170</td><td>26577912084</td><td>6299880577</td><td>149523121</td><td>3612</td><td>0</td></tr>
            <tr><td>338</td><td>171</td><td>27970034826</td><td>6709574675</td><td>161430830</td><td>4744</td><td>0</td></tr>
            <tr><td>340</td><td>172</td><td>29642262229</td><td>7158963073</td><td>181076418</td><td>5845</td><td>0</td></tr>
            <tr><td>342</td><td>173</td><td>31177474996</td><td>7620446934</td><td>195124334</td><td>7457</td><td>0</td></tr>
            <tr><td>344</td><td>174</td><td>33014225318</td><td>8118481242</td><td>218323289</td><td>10591</td><td>0</td></tr>
            <tr><td>346</td><td>175</td><td>34705254287</td><td>8636262789</td><td>235050400</td><td>12307</td><td>0</td></tr>
            <tr><td>348</td><td>176</td><td>36728266430</td><td>9196920285</td><td>262381050</td><td>15312</td><td>0</td></tr>
            <tr><td>350</td><td>177</td><td>38580626759</td><td>9768511147</td><td>282042413</td><td>19574</td><td>0</td></tr>
            <tr><td>352</td><td>178</td><td>40806395661</td><td>10396040696</td><td>314052518</td><td>23755</td><td>0</td></tr>
            <tr><td>354</td><td>179</td><td>42842199753</td><td>11037658075</td><td>337229970</td><td>29793</td><td>0</td></tr>
            <tr><td>356</td><td>180</td><td>45278616586</td><td>11730538496</td><td>374666300</td><td>38688</td><td>0</td></tr>
            <tr><td>358</td><td>181</td><td>47513679057</td><td>12446446419</td><td>401932458</td><td>45946</td><td>0</td></tr>
            <tr><td>360</td><td>182</td><td>50189039868</td><td>13221751502</td><td>445482235</td><td>55742</td><td>0</td></tr>
            <tr><td>362</td><td>183</td><td>52628839448</td><td>14010515381</td><td>477264068</td><td>69970</td><td>0</td></tr>
            <tr><td>364</td><td>184</td><td>55562506886</td><td>14874753568</td><td>528016753</td><td>83616</td><td>0</td></tr>
            <tr><td>366</td><td>185</td><td>58236270451</td><td>15754940959</td><td>565045586</td><td>100644</td><td>0</td></tr>
            <tr><td>368</td><td>186</td><td>61437700788</td><td>16705334454</td><td>623895236</td><td>126048</td><td>0</td></tr>
            <tr><td>370</td><td>187</td><td>64363670678</td><td>17683643273</td><td>666935811</td><td>149044</td><td>0</td></tr>
            <tr><td>372</td><td>188</td><td>67868149215</td><td>18744292915</td><td>734907336</td><td>179013</td><td>0</td></tr>
            <tr><td>374</td><td>189</td><td>71052718441</td><td>19816289281</td><td>784797263</td><td>217673</td><td>0</td></tr>
            <tr><td>376</td><td>190</td><td>74884539987</td><td>20992425825</td><td>863237405</td><td>257673</td><td>0</td></tr>
            <tr><td>378</td><td>191</td><td>78364039771</td><td>22186413139</td><td>920935351</td><td>302553</td><td>0</td></tr>
            <tr><td>380</td><td>192</td><td>82532990559</td><td>23475079272</td><td>1011152383</td><td>367547</td><td><a href={"/data/fullerenes/pentagon_separation/Fullerene_380_min_pent_dist5.pl"}>1</a></td></tr>
            <tr><td>382</td><td>193</td><td>86329680991</td><td>24795898388</td><td>1077679749</td><td>434339</td><td>0</td></tr>
            <tr><td>384</td><td>194</td><td>90881152117</td><td>26227197453</td><td>1181149036</td><td>507481</td><td>0</td></tr>
            <tr><td>386</td><td>195</td><td>95001297565</td><td>27670862550</td><td>1257630423</td><td>611532</td><td>0</td></tr>
            <tr><td>388</td><td>196</td><td>99963147805</td><td>29254036711</td><td>1376400812</td><td>707184</td><td>0</td></tr>
            <tr><td>390</td><td>197</td><td>104453597992</td><td>30852950986</td><td>1463926563</td><td>820525</td><td>0</td></tr>
            <tr><td>392</td><td>198</td><td>109837310021</td><td>32581366295</td><td>1599524989</td><td>982532</td><td>0</td></tr>
            <tr><td>394</td><td>199</td><td>114722988623</td><td>34345173894</td><td>1699970613</td><td>1133377</td><td>0</td></tr>
            <tr><td>396</td><td>200</td><td>120585261143</td><td>36259212641</td><td>1854374011</td><td>1323509</td><td>0</td></tr>
            <tr><td>398</td><td>201</td><td>125873325588</td><td>38179777473</td><td>1969147856</td><td>1546304</td><td>0</td></tr>
            <tr><td>400</td><td>202</td><td>132247999328</td><td>40286153024</td><td>2144985583</td><td>1784313</td><td><a href={"/data/fullerenes/pentagon_separation/Fullerene_400_min_pent_dist5.pl"}>1</a></td></tr>
          </tbody>
        </table>
      </div>
      <br/>
      <div id={"ful_no_spiral_pent"}>
        <h5>Fullerenes without spiral starting at pentagon</h5>
        <p>All fullerenes with less than 100 vertices have a spiral starting at a pentagon.</p>
        <table className={`${styles.table}`}>
          <thead>
          <tr>
            <th>Vertices</th>
            <th>Faces</th>
            <th>No pentagon spiral</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>100</td>
            <td>52</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_100"}>1</a></td>
          </tr>
          <tr>
            <td>102</td>
            <td>53</td>
            <td>0</td>
          </tr>
          <tr>
            <td>104</td>
            <td>54</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_104"}>1</a></td>
          </tr>
          <tr>
            <td>106</td>
            <td>55</td>
            <td>0</td>
          </tr>
          <tr>
            <td>108</td>
            <td>56</td>
            <td>0</td>
          </tr>
          <tr>
            <td>110</td>
            <td>57</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_110"}>1</a></td>
          </tr>
          <tr>
            <td>112</td>
            <td>58</td>
            <td>0</td>
          </tr>
          <tr>
            <td>114</td>
            <td>59</td>
            <td>0</td>
          </tr>
          <tr>
            <td>116</td>
            <td>60</td>
            <td>0</td>
          </tr>
          <tr>
            <td>118</td>
            <td>61</td>
            <td>0</td>
          </tr>
          <tr>
            <td>120</td>
            <td>62</td>
            <td>0</td>
          </tr>
          <tr>
            <td>122</td>
            <td>63</td>
            <td>0</td>
          </tr>
          <tr>
            <td>124</td>
            <td>64</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_124"}>1</a></td>
          </tr>
          <tr>
            <td>126</td>
            <td>65</td>
            <td>0</td>
          </tr>
          <tr>
            <td>128</td>
            <td>66</td>
            <td>0</td>
          </tr>
          <tr>
            <td>130</td>
            <td>67</td>
            <td>0</td>
          </tr>
          <tr>
            <td>132</td>
            <td>68</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_132"}>1</a></td>
          </tr>
          <tr>
            <td>134</td>
            <td>69</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_134"}>1</a></td>
          </tr>
          <tr>
            <td>136</td>
            <td>70</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_136"}>1</a></td>
          </tr>
          <tr>
            <td>138</td>
            <td>71</td>
            <td>0</td>
          </tr>
          <tr>
            <td>140</td>
            <td>72</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_140"}>1</a></td>
          </tr>
          <tr>
            <td>142</td>
            <td>73</td>
            <td>0</td>
          </tr>
          <tr>
            <td>144</td>
            <td>74</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_144"}>2</a></td>
          </tr>
          <tr>
            <td>146</td>
            <td>75</td>
            <td>0</td>
          </tr>
          <tr>
            <td>148</td>
            <td>76</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_148"}>2</a></td>
          </tr>
          <tr>
            <td>150</td>
            <td>77</td>
            <td>0</td>
          </tr>
          <tr>
            <td>152</td>
            <td>78</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_152"}>3</a></td>
          </tr>
          <tr>
            <td>154</td>
            <td>79</td>
            <td>0</td>
          </tr>
          <tr>
            <td>156</td>
            <td>80</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_156"}>3</a></td>
          </tr>
          <tr>
            <td>158</td>
            <td>81</td>
            <td>0</td>
          </tr>
          <tr>
            <td>160</td>
            <td>82</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_160"}>1</a></td>
          </tr>
          <tr>
            <td>162</td>
            <td>83</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_162"}>1</a></td>
          </tr>
          <tr>
            <td>164</td>
            <td>84</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_164"}>10</a></td>
          </tr>
          <tr>
            <td>166</td>
            <td>85</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_166"}>3</a></td>
          </tr>
          <tr>
            <td>168</td>
            <td>86</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_168"}>10</a></td>
          </tr>
          <tr>
            <td>170</td>
            <td>87</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_170"}>4</a></td>
          </tr>
          <tr>
            <td>172</td>
            <td>88</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_172"}>8</a></td>
          </tr>
          <tr>
            <td>174</td>
            <td>89</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_174"}>2</a></td>
          </tr>
          <tr>
            <td>176</td>
            <td>90</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_176"}>14</a></td>
          </tr>
          <tr>
            <td>178</td>
            <td>91</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_178"}>6</a></td>
          </tr>
          <tr>
            <td>180</td>
            <td>92</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_180"}>8</a></td>
          </tr>
          <tr>
            <td>182</td>
            <td>93</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_182"}>9</a></td>
          </tr>
          <tr>
            <td>184</td>
            <td>94</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_184"}>16</a></td>
          </tr>
          <tr>
            <td>186</td>
            <td>95</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_186"}>10</a></td>
          </tr>
          <tr>
            <td>188</td>
            <td>96</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_188"}>18</a></td>
          </tr>
          <tr>
            <td>190</td>
            <td>97</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_190"}>6</a></td>
          </tr>
          <tr>
            <td>192</td>
            <td>98</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_192"}>33</a></td>
          </tr>
          <tr>
            <td>194</td>
            <td>99</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_194"}>13</a></td>
          </tr>
          <tr>
            <td>196</td>
            <td>100</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_196"}>34</a></td>
          </tr>
          <tr>
            <td>198</td>
            <td>101</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_198"}>18</a></td>
          </tr>
          <tr>
            <td>200</td>
            <td>102</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_200"}>36</a></td>
          </tr>
          <tr>
            <td>202</td>
            <td>103</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_202"}>25</a></td>
          </tr>
          <tr>
            <td>204</td>
            <td>104</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_204"}>59</a></td>
          </tr>
          <tr>
            <td>206</td>
            <td>105</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_206"}>35</a></td>
          </tr>
          <tr>
            <td>208</td>
            <td>106</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_208"}>66</a></td>
          </tr>
          <tr>
            <td>210</td>
            <td>107</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_210"}>37</a></td>
          </tr>
          <tr>
            <td>212</td>
            <td>108</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_212"}>89</a></td>
          </tr>
          <tr>
            <td>214</td>
            <td>109</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_214"}>57</a></td>
          </tr>
          <tr>
            <td>216</td>
            <td>110</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_216"}>85</a></td>
          </tr>
          <tr>
            <td>218</td>
            <td>111</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_218"}>62</a></td>
          </tr>
          <tr>
            <td>220</td>
            <td>112</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_220"}>87</a></td>
          </tr>
          <tr>
            <td>222</td>
            <td>113</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_222"}>64</a></td>
          </tr>
          <tr>
            <td>224</td>
            <td>114</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_224"}>172</a></td>
          </tr>
          <tr>
            <td>226</td>
            <td>115</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_226"}>99</a></td>
          </tr>
          <tr>
            <td>228</td>
            <td>116</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_228"}>198</a></td>
          </tr>
          <tr>
            <td>230</td>
            <td>117</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_230"}>141</a></td>
          </tr>
          <tr>
            <td>232</td>
            <td>118</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_232"}>194</a></td>
          </tr>
          <tr>
            <td>234</td>
            <td>119</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_234"}>141</a></td>
          </tr>
          <tr>
            <td>236</td>
            <td>120</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_236"}>316</a></td>
          </tr>
          <tr>
            <td>238</td>
            <td>121</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_238"}>205</a></td>
          </tr>
          <tr>
            <td>240</td>
            <td>122</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_240"}>400</a></td>
          </tr>
          <tr>
            <td>242</td>
            <td>123</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_242"}>259</a></td>
          </tr>
          <tr>
            <td>244</td>
            <td>124</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_244"}>468</a></td>
          </tr>
          <tr>
            <td>246</td>
            <td>125</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_246"}>397</a></td>
          </tr>
          <tr>
            <td>248</td>
            <td>126</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_248"}>634</a></td>
          </tr>
          <tr>
            <td>250</td>
            <td>127</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_250"}>411</a></td>
          </tr>
          <tr>
            <td>252</td>
            <td>128</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_252"}>615</a></td>
          </tr>
          <tr>
            <td>254</td>
            <td>129</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_254"}>467</a></td>
          </tr>
          <tr>
            <td>256</td>
            <td>130</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_256"}>851</a></td>
          </tr>
          <tr>
            <td>258</td>
            <td>131</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_258"}>562</a></td>
          </tr>
          <tr>
            <td>260</td>
            <td>132</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_260"}>881</a></td>
          </tr>
          <tr>
            <td>262</td>
            <td>133</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_262"}>623</a></td>
          </tr>
          <tr>
            <td>264</td>
            <td>134</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_264"}>1083</a></td>
          </tr>
          <tr>
            <td>266</td>
            <td>135</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_266"}>863</a></td>
          </tr>
          <tr>
            <td>268</td>
            <td>136</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_268"}>1270</a></td>
          </tr>
          <tr>
            <td>270</td>
            <td>137</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_270"}>1037</a></td>
          </tr>
          <tr>
            <td>272</td>
            <td>138</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_272"}>1558</a></td>
          </tr>
          <tr>
            <td>274</td>
            <td>139</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_274"}>1133</a></td>
          </tr>
          <tr>
            <td>276</td>
            <td>140</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_276"}>1968</a></td>
          </tr>
          <tr>
            <td>278</td>
            <td>141</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_278"}>1525</a></td>
          </tr>
          <tr>
            <td>280</td>
            <td>142</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_280"}>2529</a></td>
          </tr>
          <tr>
            <td>282</td>
            <td>143</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_282"}>2002</a></td>
          </tr>
          <tr>
            <td>284</td>
            <td>144</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_284"}>3011</a></td>
          </tr>
          <tr>
            <td>286</td>
            <td>145</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_286"}>2473</a></td>
          </tr>
          <tr>
            <td>288</td>
            <td>146</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_288"}>3413</a></td>
          </tr>
          <tr>
            <td>290</td>
            <td>147</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_290"}>2783</a></td>
          </tr>
          <tr>
            <td>292</td>
            <td>148</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_292"}>4215</a></td>
          </tr>
          <tr>
            <td>294</td>
            <td>149</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_294"}>3401</a></td>
          </tr>
          <tr>
            <td>296</td>
            <td>150</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_296"}>4996</a></td>
          </tr>
          <tr>
            <td>298</td>
            <td>151</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_298"}>3797</a></td>
          </tr>
          <tr>
            <td>300</td>
            <td>152</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_300"}>5548</a></td>
          </tr>

          <tr>
            <td>302</td>
            <td>153</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_302.gz"}>4388</a></td>
          </tr>
          <tr>
            <td>304</td>
            <td>154</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_304.gz"}>6193</a></td>
          </tr>
          <tr>
            <td>306</td>
            <td>155</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_306.gz"}>4938</a></td>
          </tr>
          <tr>
            <td>308</td>
            <td>156</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_308.gz"}>7673</a></td>
          </tr>
          <tr>
            <td>310</td>
            <td>157</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_310.gz"}>6242</a></td>
          </tr>
          <tr>
            <td>312</td>
            <td>158</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_312.gz"}>9165</a></td>
          </tr>
          <tr>
            <td>314</td>
            <td>159</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_314.gz"}>7261</a></td>
          </tr>
          <tr>
            <td>316</td>
            <td>160</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_316.gz"}>10302</a></td>
          </tr>
          <tr>
            <td>318</td>
            <td>161</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_318.gz"}>8464</a></td>
          </tr>
          <tr>
            <td>320</td>
            <td>162</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_320.gz"}>11854</a></td>
          </tr>
          <tr>
            <td>322</td>
            <td>163</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_322.gz"}>9745</a></td>
          </tr>
          <tr>
            <td>324</td>
            <td>164</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_324.gz"}>14356</a></td>
          </tr>
          <tr>
            <td>326</td>
            <td>165</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_326.gz"}>12344</a></td>
          </tr>
          <tr>
            <td>328</td>
            <td>166</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_328.gz"}>17926</a></td>
          </tr>
          <tr>
            <td>330</td>
            <td>167</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_330.gz"}>15397</a></td>
          </tr>
          <tr>
            <td>332</td>
            <td>168</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_332.gz"}>21182</a></td>
          </tr>
          <tr>
            <td>334</td>
            <td>169</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_334.gz"}>17986</a></td>
          </tr>
          <tr>
            <td>336</td>
            <td>170</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_336.gz"}>23625</a></td>
          </tr>
          <tr>
            <td>338</td>
            <td>171</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_338.gz"}>19571</a></td>
          </tr>
          <tr>
            <td>340</td>
            <td>172</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_340.gz"}>26885</a></td>
          </tr>
          <tr>
            <td>342</td>
            <td>173</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_342.gz"}>22801</a></td>
          </tr>
          <tr>
            <td>344</td>
            <td>174</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_344.gz"}>31476</a></td>
          </tr>
          <tr>
            <td>346</td>
            <td>175</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_346.gz"}>26842</a></td>
          </tr>
          <tr>
            <td>348</td>
            <td>176</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_348.gz"}>35834</a></td>
          </tr>
          <tr>
            <td>350</td>
            <td>177</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_350.gz"}>30885</a></td>
          </tr>
          <tr>
            <td>352</td>
            <td>178</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_352.gz"}>41747</a></td>
          </tr>
          <tr>
            <td>354</td>
            <td>179</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_354.gz"}>35180</a></td>
          </tr>
          <tr>
            <td>356</td>
            <td>180</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_356.gz"}>47021</a></td>
          </tr>
          <tr>
            <td>358</td>
            <td>181</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_358.gz"}>39661</a></td>
          </tr>
          <tr>
            <td>360</td>
            <td>182</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_360.gz"}>51978</a></td>
          </tr>
          <tr>
            <td>362</td>
            <td>183</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_362.gz"}>44499</a></td>
          </tr>
          <tr>
            <td>364</td>
            <td>184</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_364.gz"}>57767</a></td>
          </tr>
          <tr>
            <td>366</td>
            <td>185</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_366.gz"}>50370</a></td>
          </tr>
          <tr>
            <td>368</td>
            <td>186</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_368.gz"}>66261</a></td>
          </tr>
          <tr>
            <td>370</td>
            <td>187</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_370.gz"}>58003</a></td>
          </tr>
          <tr>
            <td>372</td>
            <td>188</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_372.gz"}>77534</a></td>
          </tr>
          <tr>
            <td>374</td>
            <td>189</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_374.gz"}>68670</a></td>
          </tr>
          <tr>
            <td>376</td>
            <td>190</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_376.gz"}>89284</a></td>
          </tr>
          <tr>
            <td>378</td>
            <td>191</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_378.gz"}>77802</a></td>
          </tr>
          <tr>
            <td>380</td>
            <td>192</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_380.gz"}>100355</a></td>
          </tr>
          <tr>
            <td>382</td>
            <td>193</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_382.gz"}>86960</a></td>
          </tr>
          <tr>
            <td>384</td>
            <td>194</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_384.gz"}>112914</a></td>
          </tr>
          <tr>
            <td>386</td>
            <td>195</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_386.gz"}>101046</a></td>
          </tr>
          <tr>
            <td>388</td>
            <td>196</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_388.gz"}>131212</a></td>
          </tr>
          <tr>
            <td>390</td>
            <td>197</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_390.gz"}>117963</a></td>
          </tr>
          <tr>
            <td>392</td>
            <td>198</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_392.gz"}>152483</a></td>
          </tr>
          <tr>
            <td>394</td>
            <td>199</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_394.gz"}>134408</a></td>
          </tr>
          <tr>
            <td>396</td>
            <td>200</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_396.gz"}>171302</a></td>
          </tr>
          <tr>
            <td>398</td>
            <td>201</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_398.gz"}>150285</a></td>
          </tr>
          <tr>
            <td>400</td>
            <td>202</td>
            <td><a href={"/data/fullerenes/nospiral/No_pentagon_spiral_400.gz"}>189662</a></td>
          </tr>
          </tbody>
        </table>
      </div>
      <br/>
      <div id={"ful_no_spiral"}>
        <h5>Fullerenes without a spiral</h5>
        <p>All fullerenes with less than 380 vertices have a spiral.</p>
        <table className={`${styles.table}`}>
          <thead>
          <tr>
            <th>Vertices</th>
            <th>Faces</th>
            <th>No spiral</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>380</td>
            <td>192</td>
            <td><a href={"/data/fullerenes/nospiral/No_spiral_380"}>1</a></td>
          </tr>
          <tr>
            <td>382</td>
            <td>193</td>
            <td>0</td>
          </tr>
          <tr>
            <td>384</td>
            <td>194</td>
            <td><a href={"/data/fullerenes/nospiral/No_spiral_384"}>1</a></td>
          </tr>
          <tr>
            <td>386</td>
            <td>195</td>
            <td>0</td>
          </tr>
          <tr>
            <td>388</td>
            <td>196</td>
            <td>0</td>
          </tr>
          <tr>
            <td>390</td>
            <td>197</td>
            <td>0</td>
          </tr>
          <tr>
            <td>392</td>
            <td>198</td>
            <td>0</td>
          </tr>
          <tr>
            <td>394</td>
            <td>199</td>
            <td>0</td>
          </tr>
          <tr>
            <td>396</td>
            <td>200</td>
            <td>0</td>
          </tr>
          <tr>
            <td>398</td>
            <td>201</td>
            <td>0</td>
          </tr>
          <tr>
            <td>400</td>
            <td>202</td>
            <td>0</td>
          </tr>
          </tbody>
        </table>
      </div>
      <br/>
      <div className={`${styles.references}`}>
        <h5>References</h5>
        <p id={"ref1"}>[1] J. Goedgebeur and B.D. McKay, Fullerenes with distant pentagons, MATCH Commun. Math. Comput. Chem., 74(3):659-672, 2015.</p>
        <p id={"ref2"}>[2] P. W. Fowler and D. E. Manolopoulos, An Atlas of Fullerenes, Clarendon press, Oxford, 1995.</p>
        <p id={"ref3"}>[3] G. Brinkmann, J. Goedgebeur and B.D. McKay, The smallest fullerene without a spiral, Chemical Physics Letters, 522:54-55, 2012.</p>
      </div>
      <br/>
    </div>
  );
}

export default Fullerenes;