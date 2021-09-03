app.component('navbar',{
    template:`
        <header>
            <div class="menuIcon" v-on:click="openOrClose" :class=" isOpenOrClosed ? 'beingTouched' : ''" >
                <section class="icon" >
                    <div class="O">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.64 35.64">
                            <g id="Layer_2" data-name="Layer 2">
                                <g id="Layer_1-2" data-name="Layer 1">
                                    <rect class="dot" x="14.44" y="16.43" width="7.8" height="9.44"/>
                                    <path d="M14.26,0V5.94H7.13V29.7h7.13v5.94H0V0Z"/>
                                    <path d="M21.38,35.64V29.7h7.13V5.94H21.38V0H35.64V35.64Z"/>
                                </g>
                            </g>
                        </svg>
                    </div>
                    <div class="G">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.64 35.64">
                            <g id="Layer_2" data-name="Layer 2">
                                <g id="Layer_1-2" data-name="Layer 1">
                                    <polygon points="15.78 14.88 15.78 20.54 27.75 20.54 27.75 29.7 7.89 29.7 7.89 5.94 15.78 5.94 15.78 0 0 0 0 35.64 35.64 35.64 35.64 14.88 15.78 14.88"/>
                                </g>
                            </g>
                        </svg>
                    </div>
                </section>
            </div>
            <nav v-show="isOpenOrClosed" >
                <div class="menu">
                    <ul>
                        <li><a href="#gallery">Portafolio</a></li>
                        <li><a href="#resume">Resume/Contacto</a></li>
                        <li><a href="#history">Historia</a></li>
                    </ul>                 
                </div>
                <div class="logo">
                    <div class="nombre">
                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 2">
                            <path class="cls-1" d="M.68,0V.32H.33V1.68H.68V2H0V0Z"/>
                            <path class="cls-1" d="M.83,2V1.68h.34V.32H.83V0h.68V2Z"/>
                            <path class="cls-1" d="M3,.4a.38.38,0,0,1,.38.43v.68H3V.91c0-.1,0-.19-.16-.19a.22.22,0,0,0-.25.22v.57H2.35V.91c0-.11,0-.19-.16-.19A.22.22,0,0,0,2,.94v.57H1.67V.43H2V.61A.56.56,0,0,1,2.31.4a.4.4,0,0,1,.33.25A.45.45,0,0,1,3,.4Z"/>
                            <path class="cls-1" d="M4.38.43V.61A.51.51,0,0,0,4,.41.5.5,0,0,0,3.54,1,.5.5,0,0,0,4,1.53a.56.56,0,0,0,.36-.19v.17h.28V.43Zm-.09.74C4,1.43,3.69,1,3.92.77S4.52.94,4.29,1.17Z"/>
                            <path class="cls-1" d="M5.51.4h.06V.75a.6.6,0,0,0-.26,0,.32.32,0,0,0-.17.3v.42H4.86V.43h.28V.65A.45.45,0,0,1,5.51.4Z"/>
                        </svg>
                    </div>
                    <div class="apellido">
                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 2">
                            <polygon class="cls-1" points="1.25 0.83 1.25 1.15 1.69 1.15 1.69 1.68 1.02 1.68 1.02 0.32 1.27 0.32 1.27 0 0.69 0 0.69 2 2.02 2 2.02 0.83 1.25 0.83"/>
                            <path class="cls-1" d="M2.93.43h.28V1.51H2.93V1.33a.53.53,0,0,1-.36.2c-.25,0-.38-.16-.38-.42V.43h.33V1c0,.09,0,.19.17.19A.22.22,0,0,0,2.93,1Z"/>
                            <path class="cls-1" d="M5.56,0V.61a.55.55,0,0,0-.37-.2A.5.5,0,0,0,4.71,1a.5.5,0,0,0,.49.56.58.58,0,0,0,.36-.19v.17h.28V0Zm-.1,1.17c-.26.26-.6-.16-.37-.4S5.69.94,5.46,1.17Z"/>
                            <path class="cls-1" d="M4.24.43V.61a.55.55,0,0,0-.37-.2A.5.5,0,0,0,3.39,1a.51.51,0,0,0,.49.57.55.55,0,0,0,.35-.2v.17h.28V.43Zm-.1.74c-.26.26-.6-.16-.37-.4S4.37.94,4.14,1.17Z"/>
                            <path class="cls-1" d="M6.86.43V.61A.53.53,0,0,0,6.5.41.5.5,0,0,0,6,1a.51.51,0,0,0,.49.57.59.59,0,0,0,.36-.2v.17h.28V.43Zm-.1.74c-.26.26-.6-.16-.37-.4S7,.94,6.76,1.17Z"/>
                            <path class="cls-1" d="M9.85.43V.61a.51.51,0,0,0-.36-.2A.5.5,0,0,0,9,1a.51.51,0,0,0,.48.57.57.57,0,0,0,.36-.2v.17h.28V.43Zm-.1.74c-.25.26-.6-.16-.36-.4S10,.94,9.75,1.17Z"/>
                            <path class="cls-1" d="M13,.43V.61a.55.55,0,0,0-.37-.2.5.5,0,0,0-.48.56.51.51,0,0,0,.49.57.55.55,0,0,0,.35-.2v.17h.28V.43Zm-.1.74c-.26.26-.6-.16-.37-.4S13.17.94,12.94,1.17Z"/>
                            <path class="cls-1" d="M8,.41H8V.75a.55.55,0,0,0-.25,0,.31.31,0,0,0-.18.3v.42H7.33V.43h.28V.65A.47.47,0,0,1,8,.41Z"/>
                            <path class="cls-1" d="M8.83.41h.06V.75a.6.6,0,0,0-.26,0,.32.32,0,0,0-.17.3v.42H8.18V.43h.28V.65A.44.44,0,0,1,8.83.41Z"/>
                            <path class="cls-1" d="M11.64.41A.37.37,0,0,1,12,.83v.68h-.33V.91c0-.1,0-.19-.16-.19a.22.22,0,0,0-.24.22v.57H11V.91c0-.11,0-.19-.16-.19s-.25.07-.25.22v.57h-.28V.43h.28V.61A.55.55,0,0,1,11,.41a.39.39,0,0,1,.33.24A.44.44,0,0,1,11.64.41Z"/>
                        </svg>
                    </div>
                </div>

                <div class='menu' id="social">
                    <ul>
                        <li>LinkedIn</li>
                        <li>Twitter</li>
                        <li>Github</li>
                    </ul>
                </div>
            </nav>
        </header>
    `,

    setup(){
        let isOpenOrClosed = ref(true);

        
        let isMobile = navigator.userAgent.toLowerCase().match(/mobile/i);

        if(isMobile){
            isOpenOrClosed.value = false;
        }

        function openOrClose(){
            isOpenOrClosed.value = !isOpenOrClosed.value;
        }
        return {
            isOpenOrClosed,
            openOrClose
        }
    }
})