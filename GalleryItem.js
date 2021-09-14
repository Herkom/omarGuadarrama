app.component('galleyItem',{
    template: `
        <article class="item" v-on:click="modalToggle(id)" :id=id>
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


        <div :id="'modal' + id.toString()" :class="isOpen ? 'modalOpened' : 'modalClosed'" >
            <article :id="item.name.split(' ', 1)">
                <div class="closeIcon" v-on:click="modalToggle(id)">
                    <img src="./svg/X.svg"></img>
                </div>
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
                        <a v-for="(link, index) in item.link" :href="item.link[index]" target="_blank">
                            <p>{{item.name}}</p>
                            <object type="image/svg+xml" data="./svg/link.svg" class="link-icon"></object>
                        </a>
                        <article class="technologies">
                            <div class="techContainer" v-for="(tech, index) in item.technologies" >
                                <object v-if=" './svg/' + item.technologies[index] + '.svg' " type="image/svg+xml" :data=" './svg/' + item.technologies[index] + '.svg' " class="techContainer-icon"></object>
                                <p>{{item.technologies[index]}}</p>
                            </div>
                        </article>
                        <p class="role" ><strong>Role: </strong>{{item.role}}</p>
                        <p class="status" ><strong>Status: </strong>{{item.status}}</p>
                    </section>
                </header>

                <section class="explanation">
                    <p v-for="(p, index) in item.explanation" v-html="item.explanation[index]">
                    </p>
                </section>
                <section class="images">
                    <figure v-for="(image, index) in item.images">
                        <picture>
                            <img :src=" './resized/' + item.images[index]" alt="">
                        </picture>
                    </figure>
                </section>
                <section class="conclusion">
                    <p v-for="(p, index) in item.conclusion" v-html="item.conclusion[index]">
                    </p>
                </section>
            </article>
        </div>
    `,

    props: ['item', 'id'],

    setup(){
        const isOpen = ref(false)

        function modalToggle(id) {
            isOpen.value = !isOpen.value;

            if (isOpen.value){
                let modal= document.getElementById(`modal${id}`);
                window.scrollTo(0,1);
                modal.scrollTo(modal.offsetLeft, modal.offsetTop);
            }else{
                let ele = document.getElementById(id);
                let navBarHeight = document.getElementById('navbar').offsetHeight
                window.scrollTo(ele.offsetLeft, ele.offsetTop - navBarHeight);
            }
        
        }
        return { 
            modalToggle,
            isOpen,
        }
    }



/*     <source srcset="
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
    alt="Screenshot del sitio oficial del OSFE Tabasco donde se ven los diferentes niveles de submenus."></img> */

})