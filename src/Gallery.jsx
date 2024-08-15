import React, { useEffect } from 'react'
import NavBar from './components/Hero/NavbarBlack'
import GalleryRender from './components/GalleryRender';
import Footer from './components/Footer';

const Gallery = () => {


    
  const media = [
    { type: 'image', src: 'https://res.cloudinary.com/djpelpdlo/image/upload/v1723318712/44_sj06g5.jpg' },
    { type: 'image', src: 'https://res.cloudinary.com/djpelpdlo/image/upload/v1723318219/13_mfeep4.jpg' },
    { type: 'image', src: 'https://res.cloudinary.com/djpelpdlo/image/upload/v1723318305/25_buktjs.jpg' },
    { type: 'image', src: 'https://res.cloudinary.com/djpelpdlo/image/upload/v1723318340/15_txlro2.jpg' },
    { type: 'image', src: 'https://res.cloudinary.com/djpelpdlo/image/upload/v1723318360/17_k43nio.jpg' },
    { type: 'image', src: 'https://res.cloudinary.com/djpelpdlo/image/upload/v1723318382/12_zroddu.jpg' },
    { type: 'image', src: 'https://res.cloudinary.com/djpelpdlo/image/upload/v1723318390/29_p5ut6t.jpg' },
    { type: 'image', src: 'https://res.cloudinary.com/djpelpdlo/image/upload/v1723318418/30_mqgatv.jpg' },
    { type: 'image', src: 'https://res.cloudinary.com/djpelpdlo/image/upload/v1723318472/1_vv7inf.jpg' },
    { type: 'image', src: 'https://res.cloudinary.com/djpelpdlo/image/upload/v1723318491/11_mltypw.jpg' },
    { type: 'image', src: 'https://res.cloudinary.com/djpelpdlo/image/upload/v1723318492/35_hisrog.jpg' },
    { type: 'image', src: 'https://res.cloudinary.com/djpelpdlo/image/upload/v1723318526/37_yuwxsn.jpg' },
    { type: 'image', src: 'https://res.cloudinary.com/djpelpdlo/image/upload/v1723318555/2_mjitm9.jpg' },
    { type: 'image', src: 'https://res.cloudinary.com/djpelpdlo/image/upload/v1723318558/19_ygmxnv.jpg' },
    { type: 'image', src: 'https://res.cloudinary.com/djpelpdlo/image/upload/v1723318576/32_wh2y5a.jpg' },
    { type: 'image', src: 'https://res.cloudinary.com/djpelpdlo/image/upload/v1723318638/20_wrxdqa.jpg' },
    { type: 'image', src: 'https://res.cloudinary.com/djpelpdlo/image/upload/v1723318643/28_n7wzvx.jpg' },
    { type: 'image', src: 'https://res.cloudinary.com/djpelpdlo/image/upload/v1723318675/40_hazamt.jpg' },
    { type: 'image', src: 'https://res.cloudinary.com/djpelpdlo/image/upload/v1723318677/43_jh8zca.jpg' },
    { type: 'image', src: 'https://res.cloudinary.com/djpelpdlo/image/upload/v1723318701/42_igyxwm.jpg' },
    { type: 'image', src: 'https://res.cloudinary.com/djpelpdlo/image/upload/v1723318707/41_crkuei.jpg' },
    { type: 'image', src: 'https://res.cloudinary.com/djpelpdlo/image/upload/v1723318753/45_fanfkc.jpg' },
    { type: 'image', src: 'https://res.cloudinary.com/djpelpdlo/image/upload/v1723318766/36_xqhulr.jpg' },
    { type: 'image', src: 'https://res.cloudinary.com/djpelpdlo/image/upload/v1723318818/16_vmp427.jpg' },
    { type: 'image', src: 'https://res.cloudinary.com/djpelpdlo/image/upload/v1723318866/48_xmsthi.jpg' },
    { type: 'image', src: 'https://res.cloudinary.com/djpelpdlo/image/upload/v1723318927/51_uqfirl.jpg' },
    { type: 'image', src: 'https://res.cloudinary.com/djpelpdlo/image/upload/v1723318931/49_l4tu6a.jpg' },
    { type: 'image', src: 'https://res.cloudinary.com/djpelpdlo/image/upload/v1723318987/47_efpruv.jpg' },
    { type: 'image', src: 'https://res.cloudinary.com/djpelpdlo/image/upload/v1723319087/53_zjqvk1.jpg' },
    { type: 'image', src: 'https://res.cloudinary.com/djpelpdlo/image/upload/v1723319118/59_a01557.jpg' },
    { type: 'image', src: 'https://res.cloudinary.com/djpelpdlo/image/upload/v1723319486/50_nvolr6.jpg' },
    { type: 'image', src: 'https://res.cloudinary.com/djpelpdlo/image/upload/v1723319501/60_hpvaiz.jpg' },
    { type: 'image', src: 'https://res.cloudinary.com/djpelpdlo/image/upload/v1723319515/55_hpisgo.jpg' },
    { type: 'image', src: 'https://res.cloudinary.com/djpelpdlo/image/upload/v1723319522/34_dofqc4.jpg' },
    { type: 'image', src: 'https://res.cloudinary.com/djpelpdlo/image/upload/v1723319770/52_vi0i6v.jpg' },
    { type: 'image', src: 'https://res.cloudinary.com/djpelpdlo/image/upload/v1723319884/22_ogbvwb.jpg' },
    { type: 'image', src: 'https://res.cloudinary.com/djpelpdlo/image/upload/v1723319936/18_gh66p2.jpg' },
    { type: 'image', src: 'https://res.cloudinary.com/djpelpdlo/image/upload/v1723320006/61_vdfj75.jpg' },
    { type: 'image', src: 'https://res.cloudinary.com/djpelpdlo/image/upload/v1723320062/62_f4numk.jpg' },
    { type: 'image', src: 'https://res.cloudinary.com/djpelpdlo/image/upload/v1723320132/23_gpnqwo.jpg' },
    { type: 'image', src: 'https://res.cloudinary.com/djpelpdlo/image/upload/v1723320165/66_tnrpv0.jpg' },
    { type: 'image', src: 'https://res.cloudinary.com/djpelpdlo/image/upload/v1723320172/54_fgt996.jpg' },
    { type: 'image', src: 'https://res.cloudinary.com/djpelpdlo/image/upload/v1723320183/68_ehxvyf.jpg' },
    { type: 'image', src: 'https://res.cloudinary.com/djpelpdlo/image/upload/v1723320382/70_lna31i.jpg' },
    { type: 'image', src: 'https://res.cloudinary.com/djpelpdlo/image/upload/v1723320385/82_ggg3jh.jpg' },
    { type: 'image', src: 'https://res.cloudinary.com/djpelpdlo/image/upload/v1723320518/79_qpsquw.jpg' },
    { type: 'image', src: 'https://res.cloudinary.com/djpelpdlo/image/upload/v1723320554/72_jsfnxs.jpg' },
    { type: 'image', src: 'https://res.cloudinary.com/djpelpdlo/image/upload/v1723320556/85_gpiwtu.jpg' },
    { type: 'image', src: 'https://res.cloudinary.com/djpelpdlo/image/upload/v1723320560/83_s8ollw.jpg' },
    { type: 'image', src: 'https://res.cloudinary.com/djpelpdlo/image/upload/v1723320622/9_wuvkwk.jpg' },
    { type: 'image', src: 'https://res.cloudinary.com/djpelpdlo/image/upload/v1723320773/14_ka5sub.jpg' },
    { type: 'image', src: 'https://res.cloudinary.com/djpelpdlo/image/upload/v1723320943/6_jcb48a.jpg' },
    { type: 'image', src: 'https://res.cloudinary.com/djpelpdlo/image/upload/v1723321109/58_exzbb9.jpg' },
    // { type: 'image', src: '/gallery/53.jpg' },
    // { type: 'image', src: '/gallery/54.jpg' },
    // { type: 'image', src: '/gallery/55.jpg' },
    // { type: 'image', src: '/gallery/56.jpg' },
    // { type: 'image', src: '/gallery/57.jpg' },
    // { type: 'image', src: '/gallery/58.jpg' },
    // { type: 'image', src: '/gallery/59.jpg' },
    // { type: 'image', src: '/gallery/60.jpg' },
    // { type: 'image', src: '/gallery/61.jpg' },
    // { type: 'image', src: '/gallery/62.jpg' },
    // { type: 'image', src: '/gallery/63.jpg' },
    // { type: 'image', src: '/gallery/64.jpg' },
    // { type: 'image', src: '/gallery/65.jpg' },
    // { type: 'image', src: '/gallery/66.jpg' },
    // { type: 'image', src: '/gallery/67.jpg' },
    // { type: 'image', src: '/gallery/68.jpg' },
    // { type: 'image', src: '/gallery/69.jpg' },
    // { type: 'image', src: '/gallery/70.jpg' },
    // { type: 'image', src: '/gallery/71.jpg' },
    // { type: 'image', src: '/gallery/71.jpg' },
    // { type: 'image', src: '/gallery/72.jpg' },
    // { type: 'image', src: '/gallery/73.jpg' },
    // { type: 'image', src: '/gallery/74.jpg' },
    // { type: 'image', src: '/gallery/75.jpg' },
    // { type: 'image', src: '/gallery/76.jpg' },
    // { type: 'image', src: '/gallery/77.jpg' },
    // { type: 'image', src: '/gallery/78.jpg' },
    // { type: 'image', src: '/gallery/79.jpg' },
    // { type: 'image', src: '/gallery/80.jpg' },
    // { type: 'image', src: '/gallery/81.jpg' },
    // { type: 'image', src: '/gallery/82.jpg' },
    // { type: 'image', src: '/gallery/83.jpg' },
    // { type: 'image', src: '/gallery/84.jpg' },
    // { type: 'image', src: '/gallery/85.jpg' },
   
   
    // { type: 'video', src: '/gallery/vid1.mp4' },
    // { type: 'video', src: '/gallery/vid2.MOV' },
    // { type: 'video', src: '/gallery/vid3.MOV' },
    // { type: 'video', src: '/gallery/vid4.mp4' },
    // { type: 'video', src: '/gallery/vid5.MOV' },
    // { type: 'video', src: '/gallery/vid6.mp4' },
    // { type: 'video', src: '/gallery/vid7.mp4' },
    // { type: 'video', src: '/gallery/vid8.mp4' },
  ];

  useEffect(() => {
    document.title = "Gallery - UZOMMIRI"; 
  }, []);
  return (
    
    <div>
    `   <NavBar/>`
        <div>
            <p className='md:text-5xl xs:px-4 xs:text-2xl py-2 font-bold md:pb-4 md:text-center'>Gallery</p>
            <p className='md:text-2xl xs:px-4 xs:text-xl italic  font-bold  md:text-center'> Moments that inspire</p>
            </div>
            <div className="md:px-10 xs:p-4">
                <GalleryRender media={media} />
            </div>
            {/* UZO GALLERY */}
            <div>
            <p className='md:text-5xl xs:px-4 xs:text-2xl py-2 font-bold md:pb-4 md:text-center'>Uzommiri Videos</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 pb-8 gap-2">
                <iframe src='https://www.youtube.com/embed/NvLF3raxtW8' className='w-full h-80' frameborder="0" allowfullscreen></iframe>
                <iframe src='https://www.youtube.com/embed/5BPPml-W2U0' className='w-full h-80' frameborder="0" allowfullscreen></iframe>
                <iframe src='https://www.youtube.com/embed/Y3BIIzOYzbk' className='w-full h-80' frameborder="0" allowfullscreen></iframe>
                <iframe src='https://www.youtube.com/embed/dEXRtkXcFqA' className='w-full h-80' frameborder="0" allowfullscreen></iframe>
                <iframe src='https://www.youtube.com/embed/LDKK4Qv-VdA' className='w-full h-80' frameborder="0" allowfullscreen></iframe>
                <iframe src='https://www.youtube.com/embed/qbY36UJLRG8' className='w-full h-80' frameborder="0" allowfullscreen></iframe>
                <iframe src='https://www.youtube.com/embed/IJSRgK7RYL4' className='w-full h-80' frameborder="0" allowfullscreen></iframe>
                <iframe src='https://www.youtube.com/embed/iFwAI8Gv1ns' className='w-full h-80'  frameborder="0" allowfullscreen></iframe>

            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Gallery