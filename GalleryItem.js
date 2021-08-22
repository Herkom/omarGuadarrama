app.component('galleyItem',{
    template: `
        <article class="item" v-on:click="modalToggle">
            <figure class="item-thumbnail">
                <picture>
                    <!-- <source srcset="
                        ./imagenesPrueba/www.osfetabasco.gob.mx__menu_lg_@3x.png 3x,
                        ./imagenesPrueba/www.osfetabasco.gob.mx__menu_lg_@2x.png 2x,
                        ./imagenesPrueba/www.osfetabasco.gob.mx__menu_lg.png 1x"
                        media="(min-width:1000px)">
                    <source srcset="
                        ./imagenesPrueba/www.osfetabasco.gob.mx__menu_md_@3x.png 3x,
                        ./imagenesPrueba/www.osfetabasco.gob.mx__menu_md_@2x.png 2x,
                        ./imagenesPrueba/www.osfetabasco.gob.mx__menu_md.png 1x"
                        media="(min-width:600px)">
                    <img srcset="
                        ./imagenesPrueba/www.osfetabasco.gob.mx__menu_sm_@3x.png 3x,
                        ./imagenesPrueba/www.osfetabasco.gob.mx__menu_sm_@2x.png 2x"
                        src="./imagenesPrueba/www.osfetabasco.gob.mx__menu_sm.png"
                        alt="Screenshot del sitio oficial del OSFE Tabasco donde se ven los diferentes niveles de submenus."></img> -->
                    <img
                    :src=" './resized/' + item.images[0]"
                    alt="Screenshot del sitio oficial del OSFE Tabasco donde se ven los diferentes niveles de submenus.">
                </picture>
                <figcaption>Sitio del OSFE con su menú desplegado</figcaption>
            </figure>
            <div class="item-info">
                <h4>{{item.name}}</h4>
            </div>        
        </article>


        <article v-on:click="modalToggle" :class="isOpen ? 'modalOpened' : 'modalClosed'">
            <figure class="item-thumbnail">
                <picture>
                    <!-- <source srcset="
                        ./imagenesPrueba/www.osfetabasco.gob.mx__menu_lg_@3x.png 3x,
                        ./imagenesPrueba/www.osfetabasco.gob.mx__menu_lg_@2x.png 2x,
                        ./imagenesPrueba/www.osfetabasco.gob.mx__menu_lg.png 1x"
                        media="(min-width:1000px)">
                    <source srcset="
                        ./imagenesPrueba/www.osfetabasco.gob.mx__menu_md_@3x.png 3x,
                        ./imagenesPrueba/www.osfetabasco.gob.mx__menu_md_@2x.png 2x,
                        ./imagenesPrueba/www.osfetabasco.gob.mx__menu_md.png 1x"
                        media="(min-width:600px)">
                    <img srcset="
                        ./imagenesPrueba/www.osfetabasco.gob.mx__menu_sm_@3x.png 3x,
                        ./imagenesPrueba/www.osfetabasco.gob.mx__menu_sm_@2x.png 2x"
                        src="./imagenesPrueba/www.osfetabasco.gob.mx__menu_sm.png"
                        alt="Screenshot del sitio oficial del OSFE Tabasco donde se ven los diferentes niveles de submenus."></img> -->
                    <img
                    :src=" './resized/' + item.images[0]"
                    alt="Screenshot del sitio oficial del OSFE Tabasco donde se ven los diferentes niveles de submenus.">
                </picture>
                <figcaption>Sitio del OSFE con su menú desplegado</figcaption>
            </figure>
        </article>
    `,

    props: ['item'],

    setup(){
        const isOpen = ref(false)

        function modalToggle() {
            isOpen.value = !isOpen.value;
            console.log('que demonios')
        }
        return { 
            modalToggle,
            isOpen,
        }
    }
})