// import { hightlightsSlides } from '../constants'
// import { useEffect, useRef, useState } from 'react';
// import { pauseImg, playImg, replayImg } from '../utils';
// import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";



// const VideoCarousel = () => {
    
//     const videoRef = useRef([]);
//     const videoSpanRef = useRef([]);
//     const videoDivRef = useRef([]);


//     const [ video, setVideo ] = useState({
//         isEnd: false,
//         startPlay: false,
//         videoId: 0,
//         isLastVideo: false,
//         isPlaying: false,
//     })

//     const [loadedData, setLoadedData] = useState([]);

//     const { isEnd, startPlay, videoId, isLastVideo, isPlaying  } = video;

//     // useGSAP(() => {

//     //     gsap.to('#slider', {
//     //         transform: `translateX(${-100 * videoId})%)`,
//     //         duration: 2,
//     //         ease: 'power2.inOut',
//     //     })

//     //     gsap.to('#video', {
//     //         scrollTrigger:{
//     //             trigger: '#video',
//     //             toggleActions: 'restart none none none',

//     //         },
//     //         onComplete: () => {
//     //             setVideo((pre) => ({
//     //                 ...pre, startPlay: true, isPlaying: true,
//     //             }))
//     //         }
//     //     })
//     // }, [isEnd , videoId]);

//     // useEffect(() => {
//     //     if (videoSpanRef.current.length > 0) {
//     //         // رجّع كل النقط لحجمها الطبيعي فورًا
//     //         gsap.set(videoSpanRef.current, { 
//     //             width: '6px', 
//     //             // height: '6px', 
//     //             backgroundColor: 'gray' 
//     //         });
    
//     //         // بعدها، كبر النقطة الخاصة بالفيديو الحالي
//     //         gsap.to(videoSpanRef.current[videoId], { 
//     //             width: '12px', 
//     //             // height: '12px', 
//     //             backgroundColor: 'white', 
//     //             duration: 0.5 
//     //         });
//     //     }
//     // }, [videoId]); // الكود ده هيتنفذ لما الفيديو يتغير
    

//     // useEffect(() => {

//     //     if (loadedData.length > 3) {
//     //         if (!isPlaying ) {
//     //             videoRef.current[videoId].pause();
//     //         } else {
//     //             startPlay && videoRef.current[videoId].play();
//     //         }
//     //     }

//     // } , [startPlay, videoId, isPlaying, loadedData])


//     useGSAP(() => {
//         // تحريك السلايدر عند تغيير الفيديو
//         gsap.to('#slider', {
//             transform: `translateX(${-100 * videoId}%)`,
//             duration: 2,
//             ease: 'power2.inOut',
//         });
    
//         // تشغيل الفيديو عند اكتمال التحريك
//         gsap.to('#video', {
//             scrollTrigger: {
//                 trigger: '#video',
//                 toggleActions: 'restart none none none',
//             },
//             onComplete: () => {
//                 setVideo((pre) => ({
//                     ...pre,
//                     startPlay: true,
//                     isPlaying: true,
//                 }));
//             },
//         });
//     }, [isEnd, videoId]);
    
//     useEffect(() => {
//         // التحكم في حجم النقاط بناءً على الفيديو النشط
//         if (videoSpanRef.current.length > 0) {
//             // إعادة تعيين كل النقاط إلى الحجم الطبيعي
//             gsap.set(videoSpanRef.current, {
//                 width: '6px', // الحجم الطبيعي
//                 backgroundColor: 'gray', // اللون الطبيعي
//             });
    
//             // تكبير النقطة الخاصة بالفيديو النشط
//             gsap.to(videoSpanRef.current[videoId], {
//                 width: '12px', // الحجم الكبير
//                 backgroundColor: 'white', // اللون النشط
//                 duration: 0.5, // مدة التغيير
//             });
//         }
//     }, [videoId]); // يتم تنفيذ هذا الكود عند تغيير الفيديو
    
//     useEffect(() => {
//         // التحكم في تشغيل وإيقاف الفيديو
//         if (loadedData.length > 3) {
//             if (!isPlaying) {
//                 videoRef.current[videoId].pause();
//             } else {
//                 startPlay && videoRef.current[videoId].play();
//             }
//         }
//     }, [startPlay, videoId, isPlaying, loadedData]);
    

//     const handleLoadedData = (i, e) => {
//         setLoadedData((pre) => [...pre, e]);
//     }
    

//     useEffect(() => {
//         let currentProgress = 0;
//         let span = videoSpanRef.current;
//         // if (!span || !span[videoId]) return;


//         if(span[videoId]) {
//             //  animation the progress of the video
//             let anim = gsap.to(span[videoId], {
//                 onUpdate: () => {
//                     const progress = Math.ceil(anim.progress() * 100);

//                     if(progress !=currentProgress){
//                         currentProgress = progress;
                        
//                         gsap.to(videoDivRef.current[videoId], {
//                             width: window.innerWidth < 760 
//                               ? '10vw' 
//                               : window.innerWidth < 1200 
//                                 ? '10vw' 
//                                 : '4vw'
//                           })
//                         gsap.to(span[videoId], {
//                             width:`${currentProgress}%`,
//                             backgroundColor: 'white',
//                             // borderRadius: '9999px'
//                         })
//                     }
//                 },

//                 onComplete: () => {
//                     if(isPlaying) {
//                         gsap.to(videoDivRef.current[videoId], {
//                             width: '12px'
//                         })
//                         gsap.to(span[videoId], {
//                             // width: '100%',
//                             backgroundColor: '#afafaf'
//                             // borderRadius: '9999px'
//                         })
//                     }
//                 }
//             })

//             if(videoId === 0) {
//                 anim.restart();
//             }

//             const animUpdate = () => {
//                 anim.progress(videoRef.current[videoId] / hightlightsSlides[videoId].videoDuration)
//             }
           
            
//             if(isPlaying){
//                 gsap.ticker.add(animUpdate)
//             } else {
//                 gsap.ticker.remove(animUpdate)
//             }
            
//         }


//     },  [ videoId , startPlay , isPlaying ])




   


//     const handelProcess = (type, i) => {
//         switch (type) {
//             case 'video-end':
//                 setVideo((pre) => ({
//                     ...pre, isEnd: true , videoId: i + 1
//                 }))
                
//                 break;
//             case 'video-last':
//                 setVideo((pre) => ({
//                     ...pre, isLastVideo: true
//                 }))
//                 break;
//             case 'vedio-reset':
//                 setVideo((pre) => ({
//                     ...pre, isLastVideo: false, videoId: 0
//                 }))
//                 break;
//             case 'play':
//                 setVideo((pre) => ({
//                     ...pre, isPlaying: !performance.isPlaying
//                 }))
//                 break;
//             default:
//                 return video;
//         }
//     };
    


//   return (
//     <>
//         <div className='flex items-center' >
//             {hightlightsSlides.map((list, i) =>(
//                 <div key={list.id} id='slider' className='sm:pr-2 pr-10' >
//                     <div className='video-carousel_container' >
//                         <div className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black">
//                             <video 
//                                 id='video' 
//                                 playsInline={true} 
//                                 preload='auto' 
//                                 muted  
//                                 ref={(el) => (videoRef.current[i] = el) } 
//                                 onEnded={() => 
//                                     i !== 3
//                                     ? handelProcess('video-end', i)
//                                     : handelProcess('video-last')
//                                 }
//                                 onPlay={() => {setVideo((prevVideo) => ({
//                                     ...prevVideo, isPlaying: true
//                                 }))
//                             }}
//                             onLoadedMetadata={(e) => handleLoadedData(i, e)}
//                                 >
                                
                                
//                                 <source src={list.video} type='video/mp4' />
//                             </video>
//                         </div>

//                         <div className='absolute top-12 left-[5%] z-10 '  >
//                             {list.textLists.map((text, i) => (

//                                 <p key={text} className='md:text-2xl text-xl font-medium' >{text}</p>
//                                 // <p key={`${text}-${i}`} className='md:text-2xl text-xl font-medium'>{text}</p>

//                             ))}
//                         </div>



//                     </div>
//                 </div>
//             ))}
//         </div>

//         <div className='relative flex-center mt-10 ' >
//             <div className='flex-center py-5 px-3 bg-gray-300 backdrop-blur rounded-full' >
//                 {videoRef.current.map((_, i) => (
//                     <span
//                     key={i}
//                     ref={(el) => (videoSpanRef.current[i] = el)}
//                     className='w-3 h-3 rounded-full mx-2 bg-gray-200 relative cursor-pointer'
//                 >
//                     <span className=' h-full w-full rounded-full' ref={(el) => (videoDivRef.current[i] = el)} />
//                 </span>
//                 ))}
//             </div>

//                 <button className='control-btn' >
//                     <img 
//                     src={isLastVideo ? replayImg : !isPlaying ? playImg : pauseImg } 
//                     alt={isLastVideo ? 'replay' : !isPlaying? 'play' : 'pause'} 
//                     onClick={isLastVideo ? () => handelProcess('video-reset') : !isPlaying
//                         ?() => handelProcess('play') : () => handelProcess('pause')
//                      }
//                     />
//                 </button>

//         </div>



//     </>
//   )
// }

// export default VideoCarousel



import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { hightlightsSlides } from '../constants';
import { pauseImg, playImg, replayImg } from '../utils';
import { useLayoutEffect } from 'react';

const VideoCarousel = () => {
    const videoRef = useRef([]);
    const videoSpanRef = useRef([]);
    const videoDivRef = useRef([]);

    const [video, setVideo] = useState({
        isEnd: false,
        startPlay: false,
        videoId: 0,
        isLastVideo: false,
        isPlaying: false,
    });

    const [loadedData, setLoadedData] = useState([]);

    const { isEnd, startPlay, videoId, isLastVideo, isPlaying } = video;

    useGSAP(() => {
        gsap.to('#slider', {
            transform: `translateX(${-100 * videoId}%)`,
            duration: 2,
            ease: 'power2.inOut',
        });

        gsap.to('#video', {
            scrollTrigger: {
                trigger: '#video',
                toggleActions: 'restart none none none',
            },
            onComplete: () => {
                setVideo((pre) => ({
                    ...pre,
                    startPlay: true,
                    isPlaying: true,
                }));
            },
        });
    }, [isEnd, videoId]);

    useEffect(() => {
        if (videoSpanRef.current.length > 0) {
            gsap.set(videoSpanRef.current, {
                width: '0.75rem',
                backgroundColor: 'gray',
            });

            gsap.to(videoSpanRef.current[videoId], {
                width: '2rem',
                backgroundColor: 'white',
                duration: 0.5,
            });
        }
    }, [videoId]);

    useEffect(() => {
        if (loadedData.length > 3) {
            if (!isPlaying) {
                videoRef.current[videoId].pause();
            } else {
                startPlay && videoRef.current[videoId].play();
            }
        }
    }, [startPlay, videoId, isPlaying, loadedData]);

    const handleLoadedData = (i, e) => {
        setLoadedData((pre) => [...pre, e]);
    };

    const handelProcess = (type, i) => {
        switch (type) {
            case 'video-end':
                setVideo((pre) => ({
                    ...pre,
                    isEnd: true,
                    videoId: i + 1,
                }));
                break;
            case 'video-last':
                setVideo((pre) => ({
                    ...pre,
                    isLastVideo: true,
                }));
                break;
            case 'video-reset':
                setVideo((pre) => ({
                    ...pre,
                    isLastVideo: false,
                    videoId: 0,
                }));
                break;
            case 'play':
                setVideo((pre) => ({
                    ...pre,
                    isPlaying: !pre.isPlaying,
                }));
                break;
            case 'pause':
                setVideo((pre) => ({
                    ...pre,
                    isPlaying: !pre.isPlaying,
                }));
                break;
            default:
                return video;
        }
    };

    return (
        <>
            <div className="flex items-center">
                {hightlightsSlides.map((list, i) => (
                    <div key={list.id} id="slider" className="sm:pr-2 pr-10">
                        <div className="video-carousel_container">
                            <div className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black">
                                <video
                                    id="video"
                                    playsInline={true}
                                    preload="auto"
                                    muted
                                    className={`${
                                        list.id === 2 && 'translate-x-44 '}
                                        pointer-events-none
                                    `}
                                    ref={(el) => (videoRef.current[i] = el)}
                                    onEnded={() =>
                                        i !== 3
                                            ? handelProcess('video-end', i)
                                            : handelProcess('video-last')
                                    }
                                    onPlay={() => {
                                        setVideo((prevVideo) => ({
                                            ...prevVideo,
                                            isPlaying: true,
                                        }));
                                    }}
                                    onLoadedMetadata={(e) => handleLoadedData(i, e)}
                                >
                                    <source src={list.video} type="video/mp4" />
                                </video>
                            </div>

                            <div className="absolute top-12 left-[5%] z-10">
                                {list.textLists.map((text, i) => (
                                    <p key={text} className="md:text-2xl text-xl font-medium">
                                        {text}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="relative flex-center mt-10">
                <div className="flex-center py-5 px-7 bg-gray-300 backdrop-blur rounded-full">
                    {videoRef.current.map((_, i) => (
                        <span
                            key={i}
                            ref={(el) => (videoSpanRef.current[i] = el)}
                            className="w-3 h-3 rounded-full mx-2 bg-gray-200 relative cursor-pointer"
                        >
                            <span
                                className="absolute h-full w-full rounded-full"
                                ref={(el) => (videoDivRef.current[i] = el)}
                            />
                        </span>
                    ))}
                </div>

                <button className="control-btn">
                    <img
                        src={isLastVideo ? replayImg : !isPlaying ? playImg : pauseImg}
                        alt={isLastVideo ? 'replay' : !isPlaying ? 'play' : 'pause'}
                        onClick={
                            isLastVideo
                                ? () => handelProcess('video-reset')
                                : !isPlaying
                                ? () => handelProcess('play')
                                : () => handelProcess('pause')
                        }
                    />
                </button>
            </div>
        </>
    );
};

export default VideoCarousel;