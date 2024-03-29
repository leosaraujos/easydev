var APP = APP || {}
APP.easYDev = {
    setUp: function(){
        this.showPass();
        this.sticky();
        this.modTerms();
        this.buscaSide();
        this.jobSide();
        this.iniciarTask();
        this.addProject();
        this.addTask();
        this.addVideo();
        this.addFile();
        this.hideJob();
        this.btChat();
    },

   // Sticky Navbar
   sticky: function(){
        $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('.header-interna').addClass('style-fixed').css('transition', 'all 0.3s ease');                
            } else {
                $('.header-interna').removeClass('style-fixed').css('transition', 'all 0.3s ease');                
            }
            if ($(this).scrollTop() > 1) {
                $('.asideNav').addClass('style-fixed');
                $('.feedJobs').css('justify-content', 'space-between');                
            } else {
                $('.asideNav').removeClass('style-fixed');                
                $('.feedJobs').css('justify-content', 'flex-start');                
            }
        });
    },
    //Modal Politica e Termos
    modTerms: function(){
        $('.showTermos').on("click", function(){
            $('#termos').modal('show');
        });
    },
    //Mostrar senha
    showPass: function(){
        $('.showPass').on("click", function(){
            $(this).toggleClass('show');
            if('password' == $('#userPass').attr('type')){
                $('#userPass').prop('type', 'text');
            }else{
                $('#userPass').prop('type', 'password');
           }
            return false;
        });
    },
    //Chat
    btChat: function(){
        $('.bt-chat').on("click", function(){
            $(".chat").toggleClass('close');
        });
    },    
    //Busca Side
    buscaSide: function(){
        $('.btFilter').on("click", function(){
            $(this).toggleClass('active');
            $('.buscaEasy').toggleClass('show');
        });
    },
    //Job Side
    jobSide: function(){
        $('.btJob').on("click", function(){
            $(this).toggleClass('active');
            $('#colJob').toggleClass('hideCol');
            $('#colTask').toggleClass('fullCol');
        });
    },
    //Modal Iniciar Task
    iniciarTask: function(){
        $('.startTask').on("click", function(){
            $('#modal_startTask').modal('show');
        });
    },    
    //Modal Adicionar Task
    addProject: function(){
        $('.addProject').on("click", function(){
            $('#success__addProject').modal('show');
        });
    },    
    //Modal Adicionar Task
    addTask: function(){
        $('.addTask').on("click", function(){
            $('#success__addTask').modal('show');
        });
    },
    //Modal Adicionar Vídeo
    addVideo: function(){
        $('.addVideo').on("click", function(){
            $('#modal_addVideo').modal('show');
        });
    },
    //Modal Adicionar Arquivo
    addFile: function(){
        $('.addFile').on("click", function(){
            $('#modal_addFile').modal('show');
        });
    },
    //Hode Job
    hideJob: function(){
        $('.btVisible').on("click", function(){
            $(this).toggleClass('active');            
        });
    },
};
(function(){
    APP.easYDev.setUp();
})();



// $(document).ready(function(){
//     $('#success__addProject').modal('show');
// });