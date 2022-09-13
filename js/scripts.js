var APP = APP || {}
APP.easYDev = {
    setUp: function(){
        this.showPass();
        this.modTerms();
        this.buscaSide();
        this.iniciarTask();
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
    //Busca Side
    buscaSide: function(){
        $('.btFilter').on("click", function(){
            $(this).toggleClass('active');
            $('.buscaEasy').toggleClass('show');
        });
    },
    //Modal Iniciar Task
    modTerms: function(){
        $('.startTask').on("click", function(){
            $('#modal_startTask').modal('show');
        });
    },
};
(function(){
    APP.easYDev.setUp();
})();



// $(document).ready(function(){
//     $('#modal_startTask').modal('show');
// });