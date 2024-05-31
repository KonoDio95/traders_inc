import React from 'react'

const About = () => {
    return (
        <>
            <div className='container w-50'>
                <img className='mw-100 rounded' src="/imgs/marketplace.jpg" alt="Marketplace" />
                <h3 className='my-4 txt-a'>Bem-vindo ao nosso Marketplace</h3>
                <p className='my-4 txt-a'>
                    Somos a sua conexão com um mundo de oportunidades. No nosso Marketplace, você encontrará uma vasta gama de produtos e serviços, tudo em um só lugar. Navegue pela diversidade de categorias, desde eletrônicos e moda até serviços personalizados.
                </p>
                <p className='my-4 txt-a'>
                    O que nos diferencia? A facilidade de encontrar, comparar e adquirir tudo o que você precisa, com a garantia de qualidade e segurança. Com vendedores confiáveis e um sistema de avaliações transparente, sua satisfação é a nossa prioridade.
                </p>
                <p className='my-4 txt-a'>
                    Simplificamos a experiência de compra e venda, unindo pessoas, empresas e oportunidades em um único ambiente virtual. Seja você um comprador em busca de ofertas incríveis ou um vendedor talentoso, estamos aqui para tornar tudo mais simples e acessível.
                </p>
                <p className='my-4 txt-a'>
                    Explore, descubra e conecte-se. Este é o seu Marketplace, onde as possibilidades são infinitas. Junte-se a nós e faça parte dessa jornada!
                </p>
            </div>
            <hr className='txt-a w-50 m-auto'/>
            <div className='container w-50'>
                <h3 className='my-4 txt-a'>Acessibilidade:</h3>
                <p className='my-4 txt-a'>
                    Para auxiliar na navegação de pessoas surdas em nosso site, nós implementamos o Vlibras. O Vlibras é um tradutor de conteúdo para libras, tendo como o objetivo permitir que pessoas surdas acessem conteúdo multimídia em sua língua natural de comunicação.
                </p>
                <p className='my-4 txt-a'>
                    Desenvolvido pela Universidade Federal da Paraíba (UFPB) em parceria com o Ministério da Gestão e Inovação em Serviços Públicos (MGISP), por meio da Secretaria de Governo Digital (SGD), Ministério dos Direitos Humanos e da Cidadania (MDHC), por meio da Secretaria Nacional dos Direitos da Pessoa com Deficiência (SNDPD), e a Universidade Federal da Paraíba (UFPB), através do Laboratório de Aplicações de Vídeo Digital (LAVID).
                </p>
                <p className='my-4 txt-a'>
                    Com o Vlibras nós buscamos que pessoas surdas tenham uma melhor experiência navegando em nosso site.
                </p>
            </div>
            <hr className='txt-a w-50 m-auto'/>
            <div className='container w-50'>
                <h3 className='my-4 txt-a'>Dark Mode</h3>
                <p className='my-4 txt-a'>
                    O nosso site também possui um Dark Mode tendo em mente o objetivo de gerar um aumento de conforto e acessibilidade no site. Ele pode ser usado tanto pelo estilo pessoal do usuário, ou por pessoas que necessitam dele para facilitar a navegação pelo site.
                </p>
                <p className='my-4 txt-a'>
                    O Dark Mode ajuda melhorando o contraste das cores, o que pode facilitar a visualização de muitas pessoas.
                </p>
            </div>
        </>
    )
}

export default About