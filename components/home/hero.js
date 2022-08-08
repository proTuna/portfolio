import Animation from './animation'
import Link from 'next/link';

export default function Hero() {
    return(
        <>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">안녕하세요 Tunaman 입니다!
                <br className="hidden lg:inline-block" />포트폴리오 사이트
                </h1>
                <p className="mb-8 leading-relaxed">따뜻한 천고에 열매를 우는 피는 이상을 아름답고 위하여 교향악이다. 쓸쓸한 있으며, 거선의 청춘에서만 구하기 이상의 것이다. 살았으며, 무엇을 생생하며, 별과 위하여서. 없으면, 기관과 청춘을 들어 우리 따뜻한 인간은 철환하였는가? 그것을 끓는 심장의 아니한 같지 안고, 끝에 그리하였는가? 방황하여도, 것은 같은 끝까지 청춘 꽃 청춘은 아름다우냐? 작고 날카로우나 따뜻한 튼튼하며, 투명하되 돋고, 찾아 이상, 앞이 사막이다. 얼마나 하여도 가지에 피가 설산에서 내려온 보이는 봄바람이다. 따뜻한 그들은 천자만홍이 거선의 밝은 방황하여도, 운다. 기관과 소리다.이것은 동력은 행복스럽고 것이다.보라, 피다. 천지는 이상이 할지니, 밝은 있는 길을 그와 보라.</p>
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