import React, { use, useEffect, useRef } from 'react'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Image from 'next/image'
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import { motion } from 'framer-motion';
import TransitionEffect from '@/components/TransitionEffect';

    const AnimatedNumbers = ({value}) => {
    const ref = useRef(null);


    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {duration: 3000});
    const isInView = useInView(ref, {once: true});

    useEffect(() => {
        if(isInView){
            motionValue.set(value);
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
     springValue.on("change", (latest) => {

        if(ref.current && latest.toFixed(0) <= value){
            ref.current.textContent = latest.toFixed(0);
        }

     })
    }, [springValue, value])
    
    

    return<span ref={ref}></span>

}

const about = () => {
  return (
    <>
    
    <Head>
        <title>Poesias</title>
        <meta name="description" content="any description" />
    </Head>
    <TransitionEffect />
    <main className='flex w-full flex-col items-center justify-center dark:text-light' >
        <Layout className='pt-24'>
        <AnimatedText text="Tentativas falhas de descrever o quanto te amo" className='mb-16 !text-5xl lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'/>
        <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
            <div className='col-span-8 relative h-max rounded-2xl border-2 border-solid border-dark
             bg-light dark:bg-dark dark:border-light p-8 xl:col-span-4 md:order-1 md:col-span-8
             '>
       <h2 className='mb-4 text-center text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Você pra mim</h2>

      <p className='my-4 text-base font-medium md:text-sm sm:text-xs' ><b>N </b>eruda não conseguiria descrever seus olhos </p>
                <p className='my-4 text-base font-medium md:text-sm sm:text-xs' ><b>A </b> cho incrível o quanto deserto dos seus lábios traz água na boca</p>
                <p className='my-4 text-base font-medium md:text-sm sm:text-xs' ><b>T </b> ortura mesmo é não poder a ter perto da minha...</p>
                <p className='my-4 text-base font-medium md:text-sm sm:text-xs' ><b>A </b> cordar você com um bom dia da minha voz rouca </p>
                <p className='my-4 text-base font-medium md:text-sm sm:text-xs' ><b>L </b> onge demais pra eu poder tocar, perto demais pra eu deixar pra lá</p>
                <p className='my-4 text-base font-medium md:text-sm sm:text-xs' ><b>I </b> diotice seria perder a oportunidade de te encontrar</p>
               <p className='my-4 text-base font-medium md:text-sm sm:text-xs' > <b>E </b> ntrelaçando nossos dedos, somos como mindinho e polegar</p>
                <p className='my-4 text-base font-medium md:text-sm sm:text-xs' ><b>F </b>eitos opostos um do outro, mas com esforço é possível alcançar </p>
                <p className='my-4 text-base font-medium md:text-sm sm:text-xs' ><b>E </b>mbelezaria isso com palavras rasas, mas pensei em você e me afoguei</p>
                <p className='my-4 text-base font-medium md:text-sm sm:text-xs' ><b>R </b> ara como uma profundidade que me fez esquecer o chão </p>
                <p className='my-4 text-base font-medium md:text-sm sm:text-xs' ><b>R </b>i tanto contigo, sorriso frouxo veio e nem segurei</p>
                <p className='my-4 text-base font-medium md:text-sm sm:text-xs' ><b>E </b> ntretido com sua fala, desprotegi o coração</p>
                <p className='my-4 text-base font-medium md:text-sm sm:text-xs' ><b>I </b>nacreditável o quanto a mira foi boa</p>
               <p className='my-4 text-base font-medium md:text-sm sm:text-xs' > <b>R </b> ecepcionando cada flecha que o cupido atira</p>
                <p className='my-4 text-base font-medium md:text-sm sm:text-xs' ><b>A </b> brindo meu coração mais uma vez, mas não a toa. Nem fui atrás desses momentos, mas sinto... o mundo conspira.</p>
            </div>    

            <div className='col-span-8 relative h-max rounded-2xl border-2 border-solid border-dark
             bg-light dark:bg-dark dark:border-light p-8 xl:col-span-4 md:order-1 md:col-span-8
             '>
                <h2 className='mb-4 text-center text-lg font-bold uppercase text-dark/75 dark:text-light/75'>É a obra mais linda</h2>
                <p className='text-center font-medium'>Não sou o maior leitor do mundo, mas sinto que encontrei a melhor obra pra ler de trás pra frente</p>
<p className='text-center font-medium'>Cheguei a ouvir de Shakespeare que um amor pobre é o que se pode medir... e sinceramente não encontro trenas pra te dar exatidão</p>
<p className='text-center font-medium'>De acordo com Aristóteles o amor é uma alma que habita dois corpos, mas você me preenche tanto que acredito ser uma multidão</p>
<p className='text-center font-medium'>Se o amor for líquido somos pó e suco, porém acredito muito que seremos uma geleira</p>
<p className='text-center font-medium'>Pois você me amando é o aquecimento global, me derrete mesmo eu estando na geladeira</p>
<p className='text-center font-medium'>Água fria sua tristeza dói mais que o gelo em cachoeira. Quero ser quem te aquece, ilumina, molha e seca</p>
<p className='text-center font-medium'>Sua voz e sorriso são a chave que me liberta e ainda sim é a flecha do cupido que me acerta</p>
<p className='text-center font-medium'>Você tira o peso que eu já senti carregando o mundo nas costas, guardar meus sentimentos e não contar pra quem me cerca</p>
<p className='text-center font-medium'>Não acreditava mais sei que é a pessoa certa, é tão fácil de amar... E Realmente "ao toque do amor, todos se tornam poetas"</p>
<p className='text-center font-medium'>Natalie você é uma obra que da Vinci não conseguiria reproduzir, e acho que assim como ele fazia, quero te observar até o fim do meu tempo</p>
<p className='text-center font-medium'>Você é a razão da clareza e evolução do meu pensamento, quero melhorar todos os dias pra ser seu 100 porcento</p>
<p className='text-center font-medium'>Não há lavagem cerebral ou labirintos que me façam te perder do meu pensamento. Eu te amo pra ontem, pra hoje, pra amanhã... Todo momento.</p>
                </div> 
                 <div className='col-span-8 relative h-max rounded-2xl border-2 border-solid border-dark
             bg-light dark:bg-dark dark:border-light p-8 xl:col-span-4 md:order-1 md:col-span-8
             '>
                <h2 className='mb-4 text-center text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Entre todas</h2>
            <p className='text-center font-medium'>Feliz dias das mulheres pra uma das mulheres mais incríveis e formosas</p>
            <p className='text-center font-medium'>Com a força de uma leoa e ao mesmo tempo a delicadeza de uma rosa</p>
            <p className='text-center font-medium'>Cada pétala sua importa, cada caminho</p>
            <p className='text-center font-medium'>Acredite ou não mas não me importo com cada espinho</p>
            <p className='text-center font-medium'>Por você Gun's&Roses largaria armas e o rock pra fazer love songs num beat lofi</p>
            <p className='text-center font-medium'>Sei o quanto é difícil levantar todas as manhãs, imagino o quão péssimo é não se sentir seguro ao andar</p>
            <p className='text-center font-medium'>Porém quero ser seu porto seguro ao chegar, lamento as vezes não conseguir o estresse estraga minha situação</p>
            <p className='text-center font-medium'>A realidade é que eu não me sinto seguro com a vida e suas palavras de amor são minha única garantia de proteção</p>
            <p className='text-center font-medium'>Eu queria te dar um buquê, mas não sei o endereço do meu coração</p>
            <p className='text-center font-medium'>Você mora lá faz um tempo, não quero te jogar nenhuma frustração</p>
            <p className='text-center font-medium'>Mas saiba que cada batimento tem um tom seu que assim como Jobim me faz fazer música numa nota só</p>
            <p className='text-center font-medium'>Ou numa nota sol, pois você é o maior brilho dos meus dias e assim como a noite, mesmo não estando presente a minha visão ilumina a lua pra me deixar melhor</p>
            <p className='text-center font-medium'>Quero que seus dias sejam o melhor possível ao seu lado e sei que nem sempre cumpro esse papel como deveria</p>
            <p className='text-center font-medium'>Então por favor não deixe de ser meu boa noite ao descansar e muito menos deixe de ser em cada manhã meu verdadeiro bom dia.</p>
        </div>
         <div className='col-span-8 relative h-max rounded-2xl border-2 border-solid border-dark
             bg-light dark:bg-dark dark:border-light p-8 xl:col-span-4 md:order-1 md:col-span-8
             '>
                <h2 className='mb-4 text-center text-lg font-bold uppercase text-dark/75 dark:text-light/75'>que já presenciei</h2>
           <p className='text-center font-medium'>Bom dia meu amor, eu imagino que esteja acordando agora</p>
<p className='text-center font-medium'>Espero que tenha dormido bem, e que esteja melhor ainda essa hora</p>
<p className='text-center font-medium'>Quando estamos juntos eu odeio tanto a hora de ir embora</p>
<p className='text-center font-medium'>E odeio mais ainda se por minha causa seu peito chora</p>
<p className='text-center font-medium'>Nos conhecemos 5 meses atrás, e a cada dia que se passa sei que te amo cada vez mais</p>
<p className='text-center font-medium'>Num momento que a vida leva coisas que eu queria, pelo visto ela também traz</p>
<p className='text-center font-medium'>Porque é inexplicável o tanto que eu consigo sentir que te amo</p>
<p className='text-center font-medium'>Algo que eu não consegui sentir por pelo menos 3 anos</p>
<p className='text-center font-medium'>E você foi a princesa que acabou desbloqueando</p>
<p className='text-center font-medium'>Temos algumas memórias juntos, mas isso é só um pouco de muitas que teremos passado</p>
<p className='text-center font-medium'>Conhecerei o mundo com um sorriso no rosto e um mundo ao meu lado</p>
<p className='text-center font-medium'>Confesso, tô apaixonado e você é a mulher mais incrível que eu quero ter em todos os momentos</p>
<p className='text-center font-medium'>Eu sinto borboletas no estômago e uma explosão no seu beijo maior que coca-cola e mentos</p>
<p className='text-center font-medium'>Garota, todos os dias eu tenho 48h de você nos pensamentos</p>
<p className='text-center font-medium'>E mesmo eu não sendo o melhor sempre, juro que o que eu fizer nunca será pra ferir seus sentimentos</p>
<p className='text-center font-medium'>Você tem um grande espaço no meu coração, e daqui a pouco a pequena casa construída em janeiro... Vira uma mansão</p>
<p className='text-center font-medium'>Porque em pouco tempo, é como se você transformasse 10 reais em um milhão</p>
<p className='text-center font-medium'>Você é toda a riqueza que eu quero ter nas mãos</p>
<p className='text-center font-medium'>Chegar em casa e provar até a azeitona no seu macarrão</p>
<p className='text-center font-medium'>Olhar pra você, te dar um beijo e pensar... "porra, que mulherão"</p>
<p className='text-center font-medium'>Você é a dama da lei com quem eu quero construir minha trajetória</p>
<p className='text-center font-medium'>A que vai enxergar minhas derrotas e vitórias</p>
<p className='text-center font-medium'>E vai ser a vitória mais bonita da minha história</p>
<p className='text-center font-medium'>Já que o ret não cantou libertina, então escuta um pouquinho revendo nossas memórias.</p>
        </div>
        
        </div>
        </Layout>
    </main>
    </>
   
  )
}

export default about