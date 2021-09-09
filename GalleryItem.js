app.component('galleyItem',{
    template: `
        <article class="item" v-on:click="modalToggle">
            <figure class="item-thumbnail">
                <picture>
                    <img :src=" './resized/' + item.images[0]" alt="item.description">
                </picture>
                <figcaption>{{item.description}}</figcaption>
            </figure>
            <div class="item-info">
                <h4>{{item.name}}</h4>
            </div>        
        </article>


        <div v-on:click="modalToggle" :class="isOpen ? 'modalOpened' : 'modalClosed'">
            <article>
                <header>
                    <figure class="item-thumbnail">
                        <picture>
                            <img :src=" './resized/' + item.images[0]" alt="item.description">
                        </picture>
                        <figcaption>{{item.description}}</figcaption>
                    </figure>
                    <section>
                        <h2>{{item.name}}</h2>
                        <h3>{{item.description}}</h3>
                        <article class="technologies">
                            <div class="techContainer" v-for="(tech, index) in item.technologies" >
                                <object v-if=" './svg/' + item.technologies[index] + '.svg' " type="image/svg+xml" :data=" './svg/' + item.technologies[index] + '.svg' " class="icon"></object>
                                <p>{{item.technologies[index]}}</p>
                            </div>
                            
                        </article>
                    </section>
                </header>

                <section class="explanation">
                    <p v-for="(p, index) in item.explanation">
                        {{item.explanation[index]}}
                    </p>
                </section>

                <figure v-for="(image, index) in item.images">
                    <picture>
                        <img :src=" './resized/' + item.images[index]" alt="">
                    </picture>
                </figure>
                <section class="conclusion">
                    <p v-for="(p, index) in item.conclusion">
                        {{item.conclusion[index]}}
                    </p>
                </section>
            </article>
        </div>



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
    `,

    props: ['item'],

    setup(){
        const isOpen = ref(false)

        function modalToggle() {
            isOpen.value = !isOpen.value;
        }
        return { 
            modalToggle,
            isOpen,
        }
    }
})