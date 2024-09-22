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
                <a href="https://utage-system.com/p/hQBo2GyH9ugp" target="_blank" rel="noopener noreferrer">
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
          <a href="https://utage-system.com/p/hQBo2GyH9ugp" target="_blank" rel="noopener noreferrer" className="w-full mt-4 mx-4">
            <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300">
              今すぐ申し込む
            </Button>
          </a>
        </motion.div>
      )}

      <main className="flex-1">
        <section className="relative w-full py-32 md:py-48 lg:py-64 overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600">
          <motion.div 
            className="absolute inset-0 z-0"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
          >
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/niki1-6LOrchXZyPw06lJasRqWeywt3LFiyP.jpg"
              alt="Osaka cityscape at night"
              className="w-full h-full object-cover object-center opacity-20"
            />
          </motion.div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              className="flex flex-col items-center space-y-8 text-center"
            >
              <div className="space-y-4">
                <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-white drop-shadow-lg">
                  「何から始めたらいいのか分からない」を2日で解決！
                </h1>
                <p className="text-2xl font-semibold text-blue-200 drop-shadow">
                  駆動型生成AI塾 あなたのAIアカデミア
                </p>
                <p className="mx-auto max-w-[800px] text-white text-xl md:text-2xl/relaxed font-light">
                  AIの波に飲み込まれそうで、不安を感じていませんか？
                </p>
              </div>
              <ul className="text-left text-white space-y-2 font-medium">
                <li className="flex items-center"><CheckCircle className="mr-2 h-5 w-5 text-blue-300" /> 周りはAIを使いこなしているのに、自分は何から手をつけていいか分からない</li>
                <li className="flex items-center"><CheckCircle className="mr-2 h-5 w-5 text-blue-300" /> AIを活用して業務効率化したいけど、どこから学べばいいの？</li>
                <li className="flex items-center"><CheckCircle className="mr-2 h-5 w-5 text-blue-300" /> AIについて全然触れていなくて焦る。短期間で一気に学びたい！</li>
              </ul>
              <p className="text-white text-lg font-medium">そんな焦りや不安を抱えるフリーランスのあなたへ。</p>
              <div className="space-y-4">
                <Button className="bg-white text-blue-600 hover:bg-blue-50 text-lg py-6 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg" asChild>
                  <a href="https://utage-system.com/p/hQBo2GyH9ugp" target="_blank" rel="noopener noreferrer">
                    今すぐ申し込む <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <p className="text-sm text-blue-200 font-semibold">
                  先着10名限定！お早めにお申し込みください。
                </p>
              </div>
            </motion.div>
          </div>
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown className="h-12 w-12 text-white opacity-70" />
          </motion.div>
        </section>

        <section className="w-full py-24 md:py-32 bg-gray-50">
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
              「あなたのAIアカデミア」は、何から始めればいいのか分からない方でも、たった2日間でAIスキルを一気に習得できる集中講座です。
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

        <section id="メリット" className="w-full py-24 md:py-32 bg-white">
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
                { icon: Target, title: "高単価案件の受注", description: "AI関連案件を受注し、収入アップを実現。" },
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

        <section id="講師紹介" className="w-full py-24 md:py-32 bg-gradient-to-r from-blue-50 to-indigo-50">
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
                  name: "てるさん",
                  image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/onepiece01_luffy%20(1)-EldukexnTYnnTN9SmUU0rpqwOTeGbk.png",
                  description: "YouTube台本制作とAI活用の第一人者。動画作成時間を35分から15分に短縮し、再生回数10万回以上を連発。",
                },
                {
                  name: "ワンさん",
                  image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hengao_mabuta_uragaesu-1wuCTqQEsChAdg9BCagX7ujWTxOAbF.png",
                  description: "法人向けAIコンサルティングのエキスパート。多数の企業のAI導入を成功に導いた実績。",
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
                  <p className="text-gray-600">{instructor.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="参加者の声" className="w-full py-24 md:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center text-gray-900"
            >
              参加者の<span className="text-blue-600">声</span>
            </motion.h2>
            <div className="grid gap-8 md:grid-cols-2">
              {[
                { name: "Aさん", role: "フリーランスデザイナー", comment: "AIに全く触れていなかった私でも、2日間で自信を持って使いこなせるようになりました。業務効率が上がり、売上もアップしました！" },
                { name: "Bさん", role: "個人事業主", comment: "何から学べばいいのか分からず悩んでいましたが、この講座で一気に解決しました。今ではAIを活用して新しいサービスを提供できています。" }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <p className="text-gray-600 mb-4 italic">{`"${testimonial.comment}"`}</p>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-blue-600">{testimonial.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="プログラム" className="w-full py-24 md:py-32 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
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

        <section className="w-full py-24 md:py-32 bg-white">
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

        <section id="開催詳細" className="w-full py-24 md:py-32 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center text-gray-900"
            >
              開催<span className="text-blue-600">詳細</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto"
            >
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center"><Clock className="h-6 w-6 text-blue-600 mr-2" /><strong>日程：</strong>10月26日(土)、27日(日)</li>
                <li className="flex items-center"><Clock className="h-6 w-6 text-blue-600 mr-2" /><strong>時間：</strong>10:30〜18:30（両日とも）</li>
                <li className="flex items-center"><MapPin className="h-6 w-6 text-blue-600 mr-2" /><strong>場所：</strong>大阪市内（詳細はお申し込み後にご案内）</li>
                <li className="flex items-center"><Users className="h-6 w-6 text-blue-600 mr-2" /><strong>定員：</strong>先着10名限定</li>
                <li className="flex items-center"><Target className="h-6 w-6 text-blue-600 mr-2" /><strong>参加費：</strong>100,000円（税込）※分割払いも可能</li>
              </ul>
            </motion.div>
          </div>
        </section>

        <section className="w-full py-24 md:py-32 bg-white">
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

        <section id="申し込み" className="w-full py-24 md:py-32 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6"
            >
              今こそ行動を起こす時です！
            </motion.h2>
            <motion.p 
              className="mx-auto max-w-[800px] text-blue-100 text-xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              AI時代に取り残されないために、一気に学べるこの機会を逃さないでください。<br />
              たった2日間の投資で、一生使えるAIスキルを手に入れましょう。
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button className="bg-white text-blue-600 hover:bg-blue-50 text-lg py-6 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg" asChild>
                <a href="https://utage-system.com/p/hQBo2GyH9ugp" target="_blank" rel="noopener noreferrer">
                  今すぐ申し込む <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </div>
        </section>

        <section className="w-full py-24 md:py-32 bg-gray-50">
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

      <footer className="bg-gray-900 text-white py-12">
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