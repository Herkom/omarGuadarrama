app.component('loader', {
    template: `
        <section class="loader">
            <svg class="svg" viewBox="0 0 720 600">
                <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox">
                    <path d="M0.254,1,0.254,0.841,0.133,0.841,0.133,0.159,0.254,0.159,0.254,0,0,0,0,1,0.254,1,0.352,1,1,1,1,0.417,0.69,0.417,0.69,0.576,0.867,0.576,0.867,0.841,0.603,0.841,0.603,0.159,0.7,0.159,0.7,0,0.352,0,0.352,0.159,0.467,0.159,0.467,0.841,0.352,0.841,0.352,1,0.254,1"/>
                </clipPath>
            </svg>
                    
            <div class="clipped"></div>
        </section>
    `,
})