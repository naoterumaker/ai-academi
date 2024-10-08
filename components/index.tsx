'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Lightbulb, Clock, Users, Target, Rocket, Brain, ChevronDown, Menu, X, CheckCircle, Star, Phone, MapPin, Twitter, Facebook, Instagram, Linkedin } from "lucide-react"
import { motion, useAnimation } from "framer-motion"
import Image from 'next/image';

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const controls = useAnimation()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  useEffect(() => {
    if (controls) {
      controls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: "easeOut" }
      })
    }
  }, [controls])

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <motion.a 
            className="flex items-center justify-center" 
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Lightbulb className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-2xl font-bold text-gray-900">あなたのAIアカデミア</span>
          </motion.a>
          <nav className="hidden md:flex gap-8">
            {["メリット", "講師紹介", "プログラム", "参加者の声", "開催詳細", "申し込み"].map((item, index) => (
              <motion.a 
                key={item} 
                className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
                href={`#${item}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item}
              </motion.a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Button className="hidden md:inline-flex bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300" asChild>
                <a href="https://utage-system.com/p/TQ0cEeId3KGB" target="_blank" rel="noopener noreferrer">
                  今すぐ申し込む
                </a>
              </Button>
            </motion.div>
            <button className="md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white py-4"
        >
          {["メリット", "講師紹介", "プログラム", "参加者の声", "開催詳細", "申し込み"].map((item) => (
            <a
              key={item}
              className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-100 transition-colors duration-300"
              href={`#${item}`}
              onClick={toggleMenu}
            >
              {item}
            </a>
          ))}
          <a href="https://utage-system.com/p/TQ0cEeId3KGB" target="_blank" rel="noopener noreferrer" className="w-full mt-4 mx-4">
            <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300">
              今すぐ申し込む
            </Button>
          </a>
        </motion.div>
      )}

      <main className="flex-1">
                <section className="relative w-full py-4 md:py-6 lg:py-8 overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 flex items-center justify-center min-h-[70vh]">
            <motion.div 
              className="absolute inset-0 z-0"
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.1 }}
              transition={{ duration: 10, ease: "easeOut" }}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/niki1-6LOrchXZyPw06lJasRqWeywt3LFiyP.jpg"
                alt="Osaka cityscape at night"
                layout="fill"
                objectFit="cover"
                quality={50}
              />
            </motion.div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              className="flex flex-col items-center space-y-4 sm:space-y-6 text-center"
            >
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white drop-shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <p className="mb-2 sm:mb-4">たった2日で</p>
                <p className="mb-2 sm:mb-4">一生涯のAIスキルを</p>
                <p>今ここに</p>
              </motion.h1>
              <motion.div 
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-blue-200 drop-shadow"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <motion.p
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-4 sm:mb-8 text-yellow-300"
                  animate={{ opacity: [0, 1] }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                >
                  あなたのAIアカデミア
                </motion.p>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl relative inline-block">
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-300 transform -skew-x-12"></span>
                  <span className="relative z-50 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">駆動型生成AI塾</span>
                </p>
              </motion.div>
              <motion.p 
                className="mx-auto max-w-[800px] text-white text-xl md:text-2xl/relaxed font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                AIの波に飲み込まれそうで、不安を感じていませんか？
              </motion.p>
              <motion.ul 
                className="text-left text-white space-y-2 font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <li className="flex items-center"><CheckCircle className="mr-2 h-5 w-5 text-blue-300" /> 周りはAIを使いこなしているのに、自分は何から手をつけていいか分からない</li>
                <li className="flex items-center"><CheckCircle className="mr-2 h-5 w-5 text-blue-300" /> AIを活用して業務効率化したいけど、どこから学べばいいの？</li>
                <li className="flex items-center"><CheckCircle className="mr-2 h-5 w-5 text-blue-300" /> AIについて全然触れていなくて焦る。短期間で一気に学びたい！</li>
              </motion.ul>
              <motion.p 
                className="text-white text-lg font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                そんな焦りや不安を抱えるフリーランスのあなたへ。
              </motion.p>
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                <Button className="bg-white text-blue-900 hover:bg-blue-100 text-xl py-8 px-12 rounded-full transition-all duration-300 transform hover:scale-110 shadow-xl" asChild>
                  <a href="https://utage-system.com/p/TQ0cEeId3KGB" target="_blank" rel="noopener noreferrer">
                    今すぐ申し込む <ArrowRight className="ml-3 h-6 w-6" />
                  </a>
                </Button>
                <p className="text-lg text-blue-200 font-semibold text-center">
                  <span className="text-4xl font-extrabold text-yellow-400 animate-pulse">先着10名限定！</span><br />
                  お早めにお申し込みください。
                </p>
              </motion.div>
            </motion.div>
          </div>

        </section>

        <section className="w-full py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center text-gray-900"
            >
              でも、あなたは一人ではありません
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 text-center max-w-[800px] mx-auto mb-12 text-lg"
            >
              多くのフリーランスや個人事業主が、同じようにAIの急速な進化に戸惑い、何をどう学べばいいのか分からずにいます。しかし、正しい道筋を見つけ、一気に学ぶことで、短期間でAIスキルを身につけることが可能です。
            </motion.p>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mb-8 text-center text-blue-600"
            >
              「あなたのAIアカデミア」で一気にAIスキルを習得！
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-gray-600 text-center max-w-[800px] mx-auto mb-12 text-lg"
            >
              「あなたのAIアカデミア」は、何から始めればいのか分からない方でも、たった2日間でAIスキルを一気に習得できる集中講座です。
            </motion.p>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                { icon: Brain, title: "迷わず学べるカリキュラム", description: "初めてでも理解しやすいように、学ぶべきポイントを明確化。" },
                { icon: Users, title: "実践的なワークショップ", description: "実際に手を動かしながら学ぶので、即戦力のスキルが身につきます。" },
                { icon: Rocket, title: "専門家の個別サポート", description: "経験豊富な講師陣があなたの疑問をその場で解。" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="bg-blue-100 p-4 rounded-full mb-6">
                    <item.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="メリット" className="w-full py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center text-gray-900"
            >
              この講座で得られる<span className="text-blue-600">メリット</span>
            </motion.h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Rocket, title: "AIスキルを一気に習得", description: "業務効率が劇的に向上し、時間の節約で新たな挑戦が可能に。" },
                { icon: Target, title: "高単価案件の受注", description: "AI関連案件を受注し、売上アップを実現。" },
                { icon: Users, title: "市場での差別化", description: "AI×あなたの専門性で差別化し、唯一無二の存在に。" },
                { icon: Brain, title: "キャリアに自信", description: "最新のAI知識を習得し、今後のキャリアに自信を持てます。" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="bg-blue-100 p-4 rounded-full mb-6">
                    <item.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="講師紹介" className="w-full py-16 md:py-24 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="container mx-auto px-4 md:px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center text-gray-900"
            >
              実績豊富な<span className="text-blue-600">講師陣</span>があなたをサポート
            </motion.h2>
            <div className="grid gap-12 md:grid-cols-2">
              {[
                {
                  name: "てる",
                  image: "/teru.jpg",
                  description: [
                    "• NTTデータAI事業部での経験豊富",
                    "• iPS細胞研究データ化や大規模システム開発に携わる",
                    "• 動画編集で大型案件実績あり、YouTubeチャンネル30以上を立ち上げ",
                    "• （AI特化チャンネルは1.5万人登録）",
                    "• 現在は生成AI活支援に注力し、年商1.5億円以上の企業への導入支援実績あり",
                    "• Xフォロワー5700人を持ち、多業でのAI活用支援を通じてビジネス革新に貢献"
                  ].join('\n'),
                },
                {
                  name: "ワン",
                  image: "/onesan.jpg",
                  description: [
                    "• ど素人→営業活動開始半年で1050万円の売上",
                    "• 法人向けに3〜8億規模の会社様にAIコンサル",
                    "• 「AIはもっとおもしろい」をモットーにAIフリーランスラボを運営",
                    "• AI関連マネタイズで3ヶ月100万円の売上突破"
                  ].join('\n'),
                }
              ].map((instructor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-48 h-48 rounded-full mb-6 border-4 border-blue-100 shadow-lg"
                  />
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{instructor.name}</h3>
                  <p className="text-gray-600 whitespace-pre-line">{instructor.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="参加者の声" className="w-full py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center text-gray-900"
            >
              参加者の<span className="text-blue-600">声</span>
            </motion.h2>
            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                { 
                  name: "Aさん", 
                  role: "フリーランスデザイナー", 
                  videoUrl: "https://www.youtube.com/embed/bNZh3d8RfsM",
                  comment: "AIに全く触れていなかった私でも、2日間で自信を持って使いこなせるようになりました。業務効率が上がり、売上もアップしました！"
                },
                { 
                  name: "Bさん", 
                  role: "個人事業主", 
                  videoUrl: "https://www.youtube.com/embed/kRDFJKTAnRU",
                  comment: "何から学べばいいのか分からず悩んでいましたが、この講座で一気に解決しました。今ではAIを活用して新しいサービスを提供できています。"
                },
                { 
                  name: "Cさん", 
                  role: "マーケター", 
                  videoUrl: "https://www.youtube.com/embed/AfCLKZ8fNZ0",
                  comment: "AIを活用したマーケティング戦略の立て方を学び、クライアントの成果を大幅に向上させることができました。この講座は本当に価値がありました。"
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex flex-col"
                >
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-blue-600">{testimonial.role}</p>
                  </div>
                  <div className="aspect-w-16 aspect-h-9 mb-4">
                    <iframe
                      src={testimonial.videoUrl}
                      title={`${testimonial.name}の声`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full rounded-lg shadow-md"
                    ></iframe>
                  </div>
                  <p className="text-gray-600 italic flex-grow">{`"${testimonial.comment}"`}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="プログラム" className="w-full py-16 md:py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center"
            >
              プログラム<span className="text-blue-200">内容</span>
            </motion.h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                "AIの基礎と最新トレンド：初心者でも理解できるよう、わかりやすく解説。",
                "プロンプトエンジニアリングの実践：効果的なAI活用方法を手を動かして学びます。",
                "AI×専門性での差別化戦略：あなたの強みを活かしてAIを活用。",
                "AI案件獲得のためのスキル：高単価案件を受注するノウハウを伝授。",
                "AIを活用した業務効率化：ビジネスを次のステージへ。",
                "AIを活用した新規事業開発：新たな可能性を探ります。"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md backdrop-blur-sm"
                >
                  <CheckCircle className="h-6 w-6 text-blue-300 mb-2" />
                  <p className="text-blue-50">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center text-gray-900"
            >
              特典
            </motion.h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                { title: "1ヶ月間のオンラインサポート", description: "講座後も安心して学び続けられます。" },
                { title: "参加者限定コミュニティへのアクセス", description: "同じ目標を持つ仲間と情報交換。" },
                { title: "講座アーカイブ視聴権", description: "復習や見逃した部分の確認に。" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-xl font-bold mb-4 text-blue-600">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="開催詳細" className="w-full py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center text-gray-900"
            >
              開催<span className="text-blue-600">詳細</span>
            </motion.h2>
            <div className="mt-8 grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative h-64 md:h-auto"
              >
                <Image
                  src="/ingate_e.webp"
                  alt="イノゲート外観"
                  width={1200}
                  height={720}
                  className="rounded-lg object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="relative h-64 md:h-auto"
              >
                <Image
                  src="/inogate_gaikan.webp"
                  alt="イノゲート内観"
                  width={1200}
                  height={720}
                  className="rounded-lg object-cover"
                />
              </motion.div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-bold mb-4 text-gray-900">開催詳細</h3>
                <ul className="text-gray-600 space-y-2">
                  <li><strong>日程：</strong>10月26日(土)、27日(日)</li>
                  <li><strong>時間：</strong>10:30〜18:30（両日とも）</li>
                  <li><strong>定員：</strong>先着10名限定</li>
                  <li><strong>参加費：</strong>99,800円（税込）※分割払いも可能</li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-bold mb-4 text-gray-900">開催場所：イノゲート</h3>
                <p className="text-gray-600 mb-2">〒530-0001 大阪府大阪市北区梅田1丁目3番1-900号 大阪駅前第1ビル9階</p>
                <p className="text-gray-600">アクセス：JR「大阪駅」より徒歩3分、各線「梅田駅」より徒歩3分</p>
              </motion.div>
            </div>

          </div>
        </section>

        <section className="w-full py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center text-gray-900"
            >
              この講座は、こんなあなたに<span className="text-blue-600">おすすめ</span>です
            </motion.h2>
            <div className="grid gap-8 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-4 text-blue-600">おすすめの方</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>AIに触れたことがなく、何から始めればいいか分からない方</li>
                  <li>短期間で一気にAIスキルを身につけたいフリーランスの方</li>
                  <li>業務効率化や売上アップを目指すビジネスパーソン</li>
                  <li>AIを活用して自分の専門性を高めたい方</li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-4 text-red-600">おすすめできない方</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>既に高度なAIスキルを持ち、自力で最新技術をキャッチアップできる方</li>
                  <li>長期的な学習を希望し、短期集中型の学習スタイルが合わない方</li>
                  <li>AIに興味がなく、現状の業務スタイルを変えたくない方</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-blue-900 via-purple-800 to-indigo-900">
          <motion.div 
            className="absolute inset-0 z-0"
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.2 }}
            transition={{ duration: 10, ease: "easeOut" }}
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/niki1-6LOrchXZyPw06lJasRqWeywt3LFiyP.jpg"
              alt="Osaka cityscape at night"
              layout="fill"
              objectFit="cover"
              quality={10}
            />
          </motion.div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              className="flex flex-col items-center space-y-8 text-center"
            >
              <motion.h1 
                className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl/none text-white drop-shadow-lg mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                今こそ行動を起こす時です！
              </motion.h1>
              <motion.p 
                className="mx-auto max-w-[800px] text-white text-xl md:text-2xl/relaxed font-light mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                AI時代に取り残されないために、一気に学べるこの機会を逃さないでください。<br />
                たった2日間の投資で、一生使えるAIスキルを手に入れましょう。
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <Button className="bg-white text-blue-900 hover:bg-blue-100 text-lg py-6 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg" asChild>
                  <a href="https://utage-system.com/p/TQ0cEeId3KGB" target="_blank" rel="noopener noreferrer">
                    今すぐ申し込む <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>

        </section>

        <section className="w-full py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-10 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold mb-6 text-gray-900">お問い合わせ</h2>
                <p className="text-gray-600 mb-4">
                  ご質問やご不明点がございましたら、お気軽にお問い合わせください。
                </p>
                <div className="space-y-2">
                  <p className="flex items-center text-gray-600">
                    <Lightbulb className="h-5 w-5 mr-2 text-blue-600" />
                    info@ai-academia.com
                  </p>
                  <p className="flex items-center text-gray-600">
                    <Phone className="h-5 w-5 mr-2 text-blue-600" />
                    03-1234-5678
                  </p>
                  <p className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                    〒530-0001 大阪府大阪市北区梅田1-1-1
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold mb-6 text-gray-900">メッセージを送る</h2>
                <form className="space-y-4">
                  <Input className="bg-white border-gray-300" placeholder="お名前" />
                  <Input className="bg-white border-gray-300" type="email" placeholder="メールアドレス" />
                  <Textarea className="bg-white border-gray-300" placeholder="メッセージ" rows={4} />
                  <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300">送信</Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-lg font-semibold mb-4">あなたのAIアカデミア</h3>
              <p className="text-sm text-gray-400">
                最先端のAI教育で、あなたのキャリアを次のレベルへ。
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">リンク</h3>
              <ul className="space-y-2">
                {["ホーム", "メリット", "講師紹介", "プログラム", "参加者の声", "申し込み"].map((item) => (
                  <li key={item}>
                    <a href={`#${item}`} className="text-sm text-gray-400 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">法的情報</h3>
              <ul className="space-y-2">
                {["利用規約", "プライバシーポリシー", "特定商取引法に基づく表記"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">フォローする</h3>
              <div className="flex space-x-4">
                {[Twitter, Facebook, Instagram, Linkedin].map((Icon, index) => (
                  <a key={index} href="#" className="text-gray-400 hover:text-white transition-colors">
                    <Icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-sm text-gray-400">
              © 2024 あなたのAIアカデミア All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}