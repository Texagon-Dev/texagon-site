import React, { useEffect, useRef } from 'react';

function Features() {
    const [features, setFeatures] = React.useState([
        {
            name: 'Why Texagon?',
            content: [
                {
                    title: 'Simplifying Application, Website, and Desktop Development:',
                    description:
                        'Discover how Texagon streamlines the process of building and deploying applications, websites, and desktop apps, making it easier for businesses and startups to bring their ideas to life.'
                },
                {
                    title: 'Expertise and Experience:',
                    description:
                        'Learn about our team of skilled professionals who have extensive experience in web development, app development, and desktop development, ensuring top-notch solutions for our clients.'
                },
                {
                    title: 'Customer-Centric Approach:',
                    description:
                        'Find out how Texagon prioritizes the needs and goals of our clients, providing personalized services and tailored solutions to meet their specific requirements.'
                },
                {
                    title: 'Cutting-Edge Technologies:',
                    description:
                        'Explore the advanced technologies and tools that Texagon utilizes to deliver high-quality, innovative, and scalable applications, websites, and desktop apps.'
                }
            ],
            show: true
        },
        {
            name: 'Texagon vs Others',
            content: [
                {
                    title: 'Unmatched Value and Affordability:',
                    description:
                        'Discover how Texagon stands out from the competition by offering cost-effective services without compromising on quality, providing exceptional value to our clients.'
                },
                {
                    title: 'Comprehensive Service Range:',
                    description:
                        'Learn about the wide range of development services Texagon offers, including web development, app development, and desktop development, allowing clients to fulfill all their development needs under one roof.'
                },
                {
                    title: 'Timely Delivery and Reliable Support:',
                    description:
                        'Understand how Texagon ensures timely project delivery and provides reliable ongoing support, ensuring a smooth and hassle-free development experience for our clients.'
                },
                {
                    title: 'Client Success Stories:',
                    description:
                        'Read success stories from our satisfied clients, highlighting the unique benefits and advantages they experienced by choosing Texagon over other development service providers.'
                }
            ],
            show: false
        },
        {
            name: 'Our Vision',
            content: [
                {
                    title: 'Empowering Businesses with Technology:',
                    description:
                        'Discover Texagon\'s vision of empowering businesses and startups by leveraging technology to enhance their operations, productivity, and growth potential.'
                },
                {
                    title: 'Seamless Digital Transformation:',
                    description:
                        'Learn how Texagon aims to facilitate a seamless transition to the digital realm for businesses, enabling them to unlock new opportunities and stay ahead in the ever-evolving digital landscape.'
                },
                {
                    title: 'User-Centric Solutions:',
                    description:
                        'Understand Texagon\'s commitment to creating user-centric solutions that prioritize usability, functionality, and an exceptional user experience, resulting in satisfied end-users and increased business success.'
                },
                {
                    title: 'Innovation and Adaptability:',
                    description:
                        'Explore how Texagon embraces innovation and adapts to emerging trends and technologies, ensuring that our clients always have access to cutting-edge solutions that drive their business forward.'
                }
            ],
            show: false
        },
        {
            name: 'Our Story',
            content: [
                {
                    title: 'Founding Inspiration:',
                    description:
                        'We started Texagon with the goal of helping businesses and startups leverage technology to achieve their goals and objectives, and we have been working towards this vision ever since.'
                },
                {
                    title: 'Journey of Growth:',
                    description:
                        'Texagon has come a long way since its inception, and we have grown into a leading development service provider with a global presence, serving clients from all over the world.'
                },
                {
                    title: 'Team Passion and Expertise:',
                    description:
                        'You\'ll find that Texagon is home to a team of passionate and skilled professionals who are committed to delivering exceptional results and ensuring the success of our clients.'
                },
                {
                    title: 'Client Satisfaction:',
                    description:
                        'We always go the extra mile to ensure that our clients are satisfied with our services, and we are proud to have a long list of satisfied clients who have benefited from our solutions.'
                }
            ],
            show: false
        }
    ]);

    const featureRefs = useRef<(HTMLElement | null)[]>([]);
    const lastScrollY = useRef(0);
    const direction = useRef<'down' | 'up'>('down');

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (direction.current === 'up') return; // Skip if scrolling up

                const featureIndex = featureRefs.current.indexOf(entry.target as HTMLElement);

                if (entry.isIntersecting) {
                    setFeatures((features) =>
                        features.map((feature, i) => ({
                            ...feature,
                            show: i === featureIndex,
                        }))
                    );
                }
            });
        }, {
            root: null,
            rootMargin: '0px 0px -50% 0px',
            threshold: 0.1,
        });

        featureRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            featureRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, [features]);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.pageYOffset;

            if (currentScrollY > lastScrollY.current) {
                direction.current = 'down';
            } else {
                direction.current = 'up';
                const visibleFeature = featureRefs.current.findIndex((ref) => {
                    if (!ref) return false;
                    const { top, bottom } = ref.getBoundingClientRect();
                    const windowHeight = window.innerHeight;
                    return top < windowHeight && bottom >= 0;
                });
                if (visibleFeature !== -1) {
                    setFeatures((features) =>
                        features.map((feature, i) => ({
                            ...feature,
                            show: i === visibleFeature,
                        }))
                    );
                }
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <div className='flex flex-row w-full h-full mt-2 relative'>
            {/* Your component JSX... */}
            <div className='flex sticky left-0 top-32 h-full flex-col items-start w-3/5 space-y-8 bg-black'>
                {features.map((feature, index) => (
                    <h2
                        onClick={() => {
                            setFeatures((features) => features.map((f, i) => ({ ...f, show: i === index })));
                        }}
                        key={index} className={`text-4xl ${feature.show ? "text-white" : "text-white/50 hover:text-white/75"} transition-all ease-linear cursor-pointer font-bold`}>
                        {feature.name}
                    </h2>
                ))}
            </div>
            <div className='flex flex-col items-start w-full'>
                {features.map((feature, index) => (
                    <div
                        ref={(el) => { featureRefs.current[index] = el; }}
                        key={index}
                        className={`flex-col ${feature.show ? "visible" : "invisible"} space-y-5 items-start w-full sticky left-0 top-32 transition-all ease-linear h-full bg-black border border-white/25 rounded-lg p-4`}
                    >
                        {feature.content.map((content, index) => (
                            <div key={index} className='flex flex-col items-start w-full'>
                                <h3 className='text-2xl text-white font-bold'>{content.title}</h3>
                                <p className='text-white/75 text-xl'>{content.description}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Features;