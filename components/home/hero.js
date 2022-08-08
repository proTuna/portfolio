import Animation from './animation'
import Link from 'next/link';

export default function Hero() {
    return(
        <>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">BE와 DevOps에 관심이 많은 취준생 입니다.
                <br className="hidden lg:inline-block" />
                </h1>
                <p className="mb-8 leading-relaxed">주로 Java Spring을 사용하고, K8S와 CI/CD에 대해 공부하고 있습니다.</p>
                <div className="flex justify-center">
                    <Link href="/projects">
                        <a className="btn-project">
                            프로젝트 보러가기
                        </a>
                    </Link>
                </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <Animation />
            </div>
        </>
    );
}