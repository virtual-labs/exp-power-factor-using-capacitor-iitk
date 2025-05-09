<h2>Power Factor and Its Importance</h2>
<p>
    Power factor is a crucial parameter in electrical engineering that determines the efficiency of power usage in an AC circuit. It defines the phase relationship between voltage and current waveforms and is used to calculate both active and reactive power in an electrical circuit. 
</p>
<p>
    <strong>Power Factor (PF) = cosɸ</strong>, where ɸ (phi) is the phase  difference between voltage and current.
</p>
<p>
    A lower power factor means more power is wasted as reactive power, which increases the current load in the system. In DC circuits, power factor is always unity (1), whereas in AC circuits, it varies between 0 and 1 based on the type of load (resistive, inductive, or capacitive).
</p>


<center><img src="images/11_1.png" alt="Power Factor Representation" width="400" height="300">
</center>
<p><em>Figure 1: Experimental setup for measuring power and power factor in a single-phase AC circuit using a wattmeter, ammeter, and capacitive load.</em></p>
<h2>Types of Power in AC Circuits</h2>
<p>
    AC circuits have three types of power:
</p>
<ul>
    <li><strong>Active Power (P):</strong> The actual power consumed by resistive components, measured in watts (W).</li>
    <li><strong>Reactive Power (Q):</strong> Power oscillating between the source and reactive components like inductors and capacitors, measured in Volt-Amperes Reactive (VAR).</li>
    <li><strong>Apparent Power (S):</strong> The total power supplied, including both active and reactive power, measured in Volt-Amperes (VA).</li>
</ul>
<p>
    <strong>Relationship:</strong> S = V<sub>rms</sub> × I<sub>rms</sub>
</p>

<h2>Power Factor Formula and Power Calculations</h2>
<p> 
    The power factor represents how efficiently power is used and is given by:
</p>
<p>
    <strong>Power Factor = P / S = cos(ɸ)</strong>
</p>
<p>
    A power factor of 1 (unity) means no reactive power is wasted, while a lower power factor indicates inefficiency.

</p>

<h3>Actual Power Calculation:</h3>
<p>
    <strong>Actual Power = W × M.F.</strong>
</p>

<h3>Calculated Power:</h3>
<p>
    <strong>P = V × I × cosɸ</strong>
</p>
<p>
    Ideally, actual power should match the calculated power. Differences may indicate measurement errors or harmonic distortions.
</p>

<h3>Wattmeter and Multiplying Factor</h3>
<p>
    Since wattmeters have a limited scale, a multiplying factor adjusts readings to the correct power values.
</p>
<ul>
    <li><strong>Multiplying Factor (M.F) = Voltage Range × Current Range × Rated Power Factor × Half Scale Deflection</strong></li>
    <li>The half-scale deflection value is obtained from the wattmeter.</li>
</ul>
<p>
    A wattmeter typically has a full-scale deflection, but readings are often taken at half-scale deflection to improve accuracy. The deflection of the wattmeter needle represents power consumption. Half-scale deflection allows for better calibration and minimizes errors.
</p>
<p>
    The multiplication factor ensures the correct power consumption is determined from the observed deflection value.
</p>

<h2>Inductive Circuits and Power Factor</h2>
<p>
    In an inductive AC circuit, the current lags behind the voltage due to inductive reactance (X<sub>L</sub>), increasing the phase angle (θ) and reducing the power factor.
</p>
<p>
    <strong>Inductive Reactance:</strong> X<sub>L</sub> = 2πfL
</p>
<p>
    Higher inductance leads to a greater phase shift and a lower power factor.
</p>

<h2>Power Factor Correction</h2>
<p>
    Power factor can be improved by adding a capacitor in parallel with the load, reducing the phase difference between voltage and current.
</p>
<p>
    <strong>Capacitive Reactance:</strong> X<sub>C</sub> = 1 / (2πfC)
</p>
<p>
    When X<sub>C</sub> = X<sub>L</sub>, the circuit reaches resonance, improving the power factor to unity.
</p>

<h2>VI Characteristics and Power Factor</h2>
<p>
    The voltage-current (VI) characteristics describe how the current in a circuit responds to changes in voltage and how this relationship affects the power factor.
</p>
<p>
    In circuits with a high power factor (close to unity), the current waveform closely follows the voltage waveform, meaning that most of the supplied power is effectively utilized.
</p>
<p>
    In circuits with a low power factor, the current lags or leads the voltage significantly due to inductive or capacitive effects, leading to higher losses in power transmission and increased stress on electrical components.
</p>
<p>
    A lower power factor results in:
</p>
<ul>
    <li>Increased current for the same real power, leading to higher I²R losses.</li>
    <li>Voltage drops across transmission lines, reducing efficiency.</li>
    <li>Overloading of transformers and generators due to higher reactive power demand.</li>
</ul>
<p>
    Improving the power factor using capacitors or synchronous condensers can help mitigate these issues and enhance overall system performance.
</p>
<img src="images/Screenshot 2023-02-09 131502.png" alt="VI Characteristics of Power Factor" width="350" height="350">