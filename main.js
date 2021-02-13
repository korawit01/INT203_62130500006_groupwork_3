    const app = {
        data() {
            return {
                msg: 'Hello & Welcome, Vue3',
                photos: [{
                        src: 'https://img.kapook.com/u/pirawan/Pet/persia.jpg',
                        title: 'Persian',
                        favor: false,
                        like: 0
                    },
                    {
                        src: 'https://img.kapook.com/u/pirawan/Pet/americanshothair1.jpg',
                        title: 'American Shorthair',
                        favor: false,
                        like: 0
                    },
                    {
                        src: 'https://img.kapook.com/u/pirawan/Pet/scottich.jpg',
                        title: 'Scottish Fold',
                        favor: false,
                        like: 0
                    },
                    {
                        src: 'https://img.kapook.com/u/pirawan/Pet/wicheinmas.jpg',
                        title: 'Siamese',
                        favor: false,
                        like: 0

                    },
                    {
                        src: 'https://img.kapook.com/u/pirawan/Pet/siamese1.jpg',
                        title: 'Korat',
                        favor: false,
                        like: 0
                    },
                    {
                        src: 'https://img.kapook.com/u/pirawan/Pet/khaomanee2.jpg',
                        title: 'Khao Manee',
                        favor: false,
                        like: 0
                    },
                    {
                        src: 'https://img.kapook.com/u/pirawan/Pet/shutterstock_113944567.jpg',
                        title: 'British Shorthair',
                        favor: false,
                        like: 0
                    },
                    {
                        src: 'https://img.kapook.com/u/pirawan/Pet/exotic.jpg',
                        title: 'Exotic',
                        favor: false,
                        like: 0
                    },
                    {
                        src: 'https://img.kapook.com/u/pirawan/Pet/shutterstock_96886009.jpg',
                        title: 'Main Coon',
                        favor: false,
                        like: 0
                    },
                    {
                        src: 'https://img.kapook.com/u/pirawan/Pet/shutterstock_12862705.jpg',
                        title: 'Bengal',
                        favor: false,
                        like: 0
                    }

                ],
               

            }
        },
        methods:{
            toggleLike(index){
                this.photos[index].favor = !this.photos[index].favor
            }
        }
            
        }
      
    mountedApp = Vue.createApp(app).mount('#app')