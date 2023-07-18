import React from 'react'
import Header from '@/components/Header'
import { useRouter } from 'next/router'
import { MoveLeft } from 'lucide-react'
import Link from 'next/link'

export const runtime = 'edge';

export const getStaticPaths = async () => {
  const paths = work.map((project) => ({
    params: { id: project.id }
  }))
  return {
    paths,
    fallback: true
  }
}

interface ProjectDetailsProps {
  id: string,
  title: string,
  details: string,
  images: string[],
  techStack: string[]
}

const work: ProjectDetailsProps[] = [
  {
    id: '1',
    title: 'Ernie: Mathematical and Financial Chatbot',
    details: `
    <img src="https://i.imgur.com/yHDMN59.jpg" alt="Ernie" class="w-full" />

    Ernie is a remarkable chatbot designed to provide mathematical and financial assistance to users. This intelligent virtual assistant combines advanced algorithms with natural language processing capabilities to deliver accurate and efficient solutions in the realm of mathematics and finance. With its user-friendly interface and powerful functionalities, Ernie has become a go-to resource for students, professionals, and individuals seeking guidance in these domains.    

    The main objective behind developing Ernie was to bridge the gap between complex mathematical and financial concepts and the general public. These subjects can often be daunting and overwhelming, but Ernie simplifies the learning process by offering clear explanations and interactive problem-solving tools. Whether it's basic arithmetic, advanced calculus, investment strategies, or risk assessment, Ernie covers a wide range of topics to cater to diverse user needs. \nErnie's intuitive interface makes it accessible to users of all proficiency levels. It utilizes conversational AI techniques to engage users in interactive conversations, leading them step-by-step through complex problem-solving scenarios. By breaking down complex concepts into manageable chunks, Ernie ensures that users develop a solid understanding of the subject matter.
    
    In the field of finance, Ernie shines as an intelligent advisor. It can assist users with investment planning, portfolio management, and risk analysis. Ernie's robust algorithms leverage real-time data to provide accurate predictions and recommendations, empowering users to make informed financial decisions. Whether it's analyzing stock market trends, evaluating the risk associated with a particular investment, or optimizing portfolio diversification, Ernie offers valuable insights and strategies.
    
    Ernie's impact on education has been significant. It has revolutionized the way mathematics and finance are taught and learned. Students can now receive personalized tutoring and guidance from Ernie, enhancing their understanding of mathematical concepts and improving their problem-solving abilities. This personalized approach allows students to learn at their own pace and reinforces their confidence in tackling complex mathematical challenges.
    
    Financial professionals and individuals in the business sector have also embraced Ernie as a valuable tool. Its sophisticated algorithms and data-driven analysis empower them to make informed decisions and optimize their financial strategies. By incorporating Ernie into their workflow, financial advisors and professionals can streamline their operations, saving time and effort on complex calculations and research.
    
    The future of Ernie holds immense potential for growth. With ongoing developments and advancements in AI technology, Ernie's capabilities will continue to expand, covering an even broader range of mathematical and financial topics. Furthermore, Ernie can potentially integrate with other platforms and applications, becoming a ubiquitous presence in various industries, including education, finance, and research.
    
    In conclusion, Ernie's mathematical and financial chatbot has emerged as an invaluable resource for users seeking assistance in these domains. By leveraging AI and natural language processing, Ernie simplifies complex concepts, provides accurate solutions, and enhances learning experiences. Whether you're a student, a financial professional, or an individual looking for mathematical and financial guidance, Ernie is a reliable companion that empowers users to unlock their full potential.`,
    images: [
      'https://i.imgur.com/otRx4mN.png'
    ],
    techStack: [
      'React',
      'NodeJS',
      'Supabase',
      'ChakraUI'
    ]
  },
  {
    id: '2',
    title: 'Znap: AI-Powered Business Planner and Website Theme Planner',
    details: `
    <img src="https://i.imgur.com/t1A5T3w.png" alt="Znap" class="w-full" />
    Znap is an innovative AI-powered tool that serves as a business planner and website theme planner, revolutionizing the way entrepreneurs and businesses approach strategic planning and website design. With its advanced algorithms and intuitive interface, Znap simplifies the planning process, provides valuable insights, and helps users create compelling online presences that align with their business objectives.

    At its core, Znap aims to streamline the business planning process. It offers a comprehensive set of features that guide users through the creation of a well-structured business plan. Whether it's a startup seeking funding, an established company looking to expand, or an entrepreneur exploring a new business idea, Znap empowers users to articulate their vision, set clear goals, and develop actionable strategies.
    
    One of Znap's key strengths lies in its AI capabilities. By leveraging machine learning algorithms, Znap analyzes vast amounts of data to generate valuable insights and recommendations. The tool incorporates market trends, competitor analysis, and financial projections to provide users with a holistic view of their business landscape. These insights enable users to make informed decisions, mitigate risks, and capitalize on emerging opportunities.
    
    Znap's website theme planning feature is equally impressive. It recognizes the importance of a visually appealing and user-friendly website in today's digital era. With Znap, users can explore a vast library of professionally designed website themes and templates tailored to various industries and business types. The AI-powered recommendation engine takes into account the user's branding, target audience, and business goals to suggest the most suitable themes. This saves users valuable time and resources, ensuring that their websites have a polished and cohesive look from the outset.
    
    The user interface of Znap is designed to be user-friendly and intuitive. The tool guides users through the planning process, offering prompts and suggestions to facilitate the creation of a comprehensive business plan. Users can easily navigate through different sections, input relevant information, and visualize their progress in real-time. Znap's interactive charts, graphs, and visualizations make it easy to communicate complex data and ideas effectively.
    
    Another notable feature of Znap is its collaboration capabilities. It allows team members to work together seamlessly, promoting effective communication and fostering a collaborative planning environment. Users can invite team members, assign tasks, and track progress, ensuring that everyone is aligned and working towards a shared vision. This collaborative approach enhances productivity and efficiency, particularly for businesses with distributed teams or multiple stakeholders involved in the planning process.
    
    Znap has made a significant impact on the business landscape by democratizing the planning and website design process. It has empowered startups, small businesses, and entrepreneurs who may not have extensive resources or expertise in strategic planning to create robust business plans and visually appealing websites. By providing accessible and user-friendly tools, Znap levels the playing field, enabling businesses of all sizes to compete effectively in the digital realm.
    
    Looking towards the future, Znap has the potential to further enhance its offerings and expand its reach. As AI technology continues to advance, Znap can incorporate more sophisticated algorithms, integrating real-time market data, consumer insights, and industry trends into its planning and recommendation engine. This would enable users to stay ahead of the curve, adapt to changing market dynamics, and make data-driven decisions with confidence.
    
    In conclusion, Znap is an AI-powered business planner and website theme planner that empowers entrepreneurs and businesses to streamline their strategic planning processes and create visually appealing websites. With its AI capabilities, user-friendly interface, and collaborative features, Znap has transformed the way businesses approach planning and design. By leveraging Znap's comprehensive tools, users can develop robust business plans, make informed decisions, and establish captivating online presences that resonate with their target audience.`,
    images: [
      'https://i.imgur.com/9ffi5k7.png'
    ],
    techStack: [
      'React',
      'Supabase',
      'TailwindCSS'
    ]
  },
  {
    id: '3',
    title: 'GreatGov',
    details: `
    <img src="https://i.imgur.com/4MHKOxU.png" alt="GreatGov" class="w-full" />
    Greatgov is an innovative AI-based policy writing tool designed to assist governments, policymakers, and organizations in crafting effective policies and regulations. With its advanced natural language processing capabilities and sophisticated algorithms, Greatgov streamlines the policy writing process, enhances efficiency, and ensures that policies are well-structured, comprehensive, and aligned with the desired objectives.

    The primary goal of Greatgov is to address the challenges and complexities associated with policy formulation. Crafting policies requires extensive research, stakeholder engagement, and a deep understanding of legal frameworks. Greatgov leverages AI technology to automate and augment these processes, empowering policymakers to focus on higher-level decision-making while optimizing the policy writing process.

    One of the key features of Greatgov is its intelligent document generation. Through a user-friendly interface, policymakers can input their policy objectives, desired outcomes, and key parameters. Greatgov then utilizes its algorithms to generate a comprehensive policy document that includes sections such as the policy background, objectives, implementation strategies, and evaluation mechanisms. This automation not only saves significant time and effort but also ensures consistency and accuracy throughout the policy document.

    Greatgov's AI capabilities extend beyond document generation. It offers features such as language enhancement, where the tool suggests improvements to sentence structure, clarity, and overall readability. This ensures that policies are effectively communicated and easily understood by stakeholders and the general public. Greatgov also aids in the identification of potential loopholes or unintended consequences, offering recommendations to mitigate risks and strengthen the policy's effectiveness.

    Furthermore, Greatgov promotes evidence-based policy formulation. By leveraging its vast data analysis capabilities, the tool can identify patterns, correlations, and insights from existing policies and research. This data-driven approach helps policymakers craft policies that are grounded in empirical evidence and best practices, enhancing their effectiveness and impact.

    The potential impact of Greatgov is significant. By automating and streamlining the policy writing process, the tool enables governments and organizations to save time and resources. Policymakers can allocate their efforts towards strategic decision-making, stakeholder engagement, and evaluating the policy's impact on society, rather than getting bogged down in the details of drafting documents.

    Looking ahead, the future of Greatgov holds immense potential. As AI technology continues to advance, Greatgov can incorporate more sophisticated algorithms, allowing for deeper analysis of policy landscapes, real-time monitoring of policy effectiveness, and the ability to adapt policies to changing contexts. By integrating with other data sources and systems, Greatgov can become an integral part of the policy-making ecosystem, facilitating evidence-based decision-making on a larger scale.

    In conclusion, Greatgov is an AI-based policy writing tool that revolutionizes the policy formulation process. By automating document generation, providing valuable insights, promoting collaboration, and facilitating evidence-based decision-making, Greatgov empowers policymakers and organizations to craft well-structured, effective policies. With its user-friendly interface and advanced AI capabilities, Greatgov paves the way for efficient, transparent, and impactful policy-making.
    `,
    images: [
      'https://i.imgur.com/4LhrzdE.png'
    ],
    techStack: [
      'React',
      'NodeJS',
      'Supabase',
      'TailwindCSS'
    ]
  },
  {
    id: '4',
    title: 'SerotechAI',
    details: `
    <img src="https://i.imgur.com/Rkd3pIp.png" alt="SerotechAI" class="w-full" />
    Serotechai is a comprehensive AI-powered tool that combines three powerful AI tools in one platform: a business plan generator, an image generator, and a story generator. With its diverse set of functionalities, Serotechai empowers entrepreneurs, content creators, and storytellers to streamline their workflows, unlock creativity, and enhance productivity.

    The first tool offered by Serotechai is the business plan generator. Crafting a business plan is a crucial step for any entrepreneur or business owner, but it can be a time-consuming and complex process. Serotechai simplifies this task by leveraging AI algorithms to automatically generate business plans based on user inputs. By providing key information such as industry type, target market, and desired outcomes, users can receive a professionally structured business plan tailored to their specific needs. This feature saves significant time and effort, allowing users to focus on refining their strategies and executing their business ideas.

    The image generator is another valuable tool provided by Serotechai. Visual content plays a vital role in today's digital landscape, and creating engaging and eye-catching images can be a challenge. Serotechai's image generator utilizes AI to automatically generate images based on user preferences and parameters. Users can specify the style, theme, and elements they desire, and the tool will create unique, customized images accordingly. This feature is particularly useful for content creators, social media managers, and marketers looking to enhance their visual content without the need for extensive design skills or resources.

    The story generator within Serotechai is an exciting tool that fuels creativity and storytelling. Crafting compelling narratives, whether for fiction, marketing campaigns, or brand storytelling, often requires a spark of inspiration. The story generator leverages AI to generate story ideas, plotlines, and character profiles based on user prompts. Users can input specific genres, themes, or key elements they want to incorporate, and Serotechai will generate creative and unique story concepts. This tool serves as a valuable resource for writers, content creators, and anyone seeking inspiration for storytelling projects.

    One of the strengths of Serotechai is its user-friendly interface. The platform is designed to be intuitive and accessible, allowing users to easily navigate between the different AI tools. The interface provides a seamless experience, enabling users to input their preferences, review generated content, and make adjustments as needed. This simplicity and ease of use make Serotechai accessible to individuals with varying levels of technical expertise, empowering them to unlock their creativity and achieve their desired outcomes.

    Serotechai's AI-powered tools are continuously evolving and learning. The more users interact with the platform, the more data is collected, enabling the algorithms to improve and deliver more accurate and tailored results over time. This iterative process ensures that Serotechai remains relevant, adaptive, and capable of meeting the changing needs of its users.

    The impact of Serotechai spans across various industries and creative endeavors. Entrepreneurs and business owners can leverage the business plan generator to expedite the process of creating a solid business plan, increasing their chances of success. Content creators, marketers, and social media managers can utilize the image generator to enhance their visual content and engage their target audience. Writers and storytellers can draw inspiration from the story generator to spark their creativity and develop captivating narratives.

    Looking ahead, the future of Serotechai is promising. As AI technology continues to advance, Serotechai can expand its capabilities and incorporate new features based on user feedback and emerging trends. The platform can enhance its algorithms to provide even more personalized and contextually relevant outputs. Additionally, integration with popular design tools, collaboration platforms, and content management systems can further extend the reach and usability of Serotechai.

    In conclusion, Serotechai is a versatile AI-powered tool that combines a business plan generator, image generator, and story generator. By automating and streamlining key processes, Serotechai empowers entrepreneurs, content creators, and storytellers to unlock their creativity, enhance their productivity, and achieve their desired outcomes. With its user-friendly interface and powerful AI capabilities, Serotechai paves the way for efficient and innovative content creation and storytelling.`,
    images: [
      'https://i.imgur.com/TsuhAUp.png',
      'https://i.imgur.com/Rkd3pIp.png'
    ],
    techStack: [
      'React',
      'NodeJS',
      'Supabase',
      'TailwindCSS'
    ]
  }
]

export const getStaticProps = async (context: any) => {
  const id = context.params.id
  const project = work.filter((project) => project.id === id)[0]
  return {
    props: {
      id: project.id,
      title: project.title,
      details: project.details,
      images: project.images,
      techStack: project.techStack
    }
  }
}

function ProjectDetails(props: ProjectDetailsProps) {
  return (
    <div className='flex flex-col w-full min-h-screen bg-black'>
      <div className='px-16 sticky top-0 z-50 bg-black/50 backdrop-blur-2xl border-b border-white/20'>
        <Header />
      </div>
      <div className='flex flex-col w-full h-full items-center font-secondary'>
        <div className='flex flex-col px-4 md:px-12 w-full md:w-7/12 py-8 h-full'>
          <Link href='/work'>
            <div className='flex flex-row mb-10 w-full cursor-pointer items-center group space-x-4'>
              <MoveLeft className='text-white group-hover:-translate-x-1 transition-all ease-linear' size={32} />
              <p className='text-white hover:text-white/80 text-md underline underline-offset-2 font-heading font-bold'>All Projects</p>
            </div>
          </Link>
          <h1 className='text-xl md:text-4xl font-heading font-bold bg-gradient-to-r from-gray-300 to-white leading-tight bg-clip-text text-transparent py-1'>
            {props.title}
          </h1>
          <div
            dangerouslySetInnerHTML={{ __html: props.details }}
            className='text-md md:text-xl whitespace-pre-line text-white/70'></div>

        </div>
      </div>
    </div>
  )
}

export default ProjectDetails