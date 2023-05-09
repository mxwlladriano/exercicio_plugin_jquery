$(document).ready(function(){

    $('#telefone').mask('(00) 00000-0000')

    $('#cpf').mask('000.000.000-00')

    $('#cep').mask('00000-000')

    $('#numero').mask('0000000000')

    $('form').validate({
        rules: {
            nome: {
                required: true,
            },
            telefone: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            cpf: {
                required: true
            },
            cep: {
                required: true
            },
            endereço: {
                required: true
            }
        },

        messages: {
            nome:   'Esse campo é obrigatório',
            telefone:   'Esse campo é obrigatório',
            email:   'Esse campo é obrigatório',
            cpf:   'Esse campo é obrigatório',
            cep:   'Esse campo é obrigatório',
            endereço:   'Esse campo é obrigatório',
        }
    })
    $
})