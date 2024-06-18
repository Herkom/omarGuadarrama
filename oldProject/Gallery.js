app.component('Gallery', {
    template:`
        <section class="gallery" id="gallery">
            <div class="gallery-container">
                <galleyItem v-for="(item, index) in jobitems" :item="item" :id="index" ></galleyItem>
            </div>
        </section>
    `,

    props: ['jobitems'],

    setup(){
        const loading = inject('loading');

        window.onload = event => {
            loading.value = !loading.value
        }
        return loading
    }
})