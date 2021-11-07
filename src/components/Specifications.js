import React from 'react';



const Specifications = () => {
    return (
        <div className="specifications">
            <h2 className="specifications-title">Plan Of Implementation</h2>
            <p className="specifications-desc">
                Gaussian smoothing we take a weighted average of pixel values in the neighborhood. The weights are inversely proportional to the distance from the center of the neighborhood. Besides these spatial weights, the bilateral filter adds a tonal weight such that pixel values that are close to the pixel value in the center are weighted more than pixel values that are more different.
            </p>
            <p className="specifications-desc">The filter starts with linear Gaussian smoothing following the equation: </p>
            <p className="specifications-desc">g(x)=(f∗G^s)(x)=∫Rf(y)G^s(x−y)dy</p>
            <p className="specifications-desc">The weight for f(y) equals G^s(x−y) and is only dependent on the spatial distance ∥x−y∥. The bilateral filter adds a weighting term that depends on the tonal distance f(y)−f(x). This results in:</p>
            <p className="specifications-desc">
                <div class="All"><div class="Sum"> g(x)=</div><span class="Fraction"><span class="Numerator">∫Rf(y)G^s(x−y)G^t(f(x)−f(y))dy</span><span class="Denominator">∫RG^s(x−y)G^t(f(x)−f(y))dy</span></span></div>
                <br></br> Upon implementing those equations using pyhton programming we will be left with a noise-smoothing, edge-preserving filter.

            </p>
        </div>
    );
}

export default Specifications;