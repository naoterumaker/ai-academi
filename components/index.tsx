'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Lightbulb, Clock, Users, Target, Rocket, Brain, ChevronDown, Menu, X, CheckCircle, Star, Phone, MapPin, Twitter, Facebook, Instagram, Linkedin } from "lucide-react"
import { motion, useAnimation } from "framer-motion"
import Image from 'next/image';

export function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const controls = useAnimation()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  useEffect(() => {
    controls.start({
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    })
  }, [controls])

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
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
            {["コンセプト", "特徴", "カリキュラム", "講師紹介", "FAQ"].map((item, index) => (
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
              <Button className="hidden md:inline-flex bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300">
                無料カウンセリング予約
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
          {["コンセプト", "特徴", "カリキュラム", "講師紹介", "FAQ"].map((item) => (
            <a
              key={item}
              className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-100 transition-colors duration-300"
              href={`#${item}`}
              onClick={toggleMenu}
            >
              {item}
            </a>
          ))}
          <Button className="w-full mt-4 mx-4 bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300">
            無料カウンセリング予約
          </Button>
        </motion.div>
      )}

      <main className="flex-1">
        <section className="relative w-full py-32 md:py-48 lg:py-64 overflow-hidden">
          <motion.div 
            className="absolute inset-0 z-0"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
          >
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/niki1-6LOrchXZyPw06lJasRqWeywt3LFiyP.jpg"
              alt="Osaka cityscape at night"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-white bg-opacity-80 backdrop-blur-sm"></div>
          </motion.div>
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              className="flex flex-col items-center space-y-8 text-center"
            >
              <div className="space-y-4">
                <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl/none text-gray-900">
                  あなたのAIアカデミア
                </h1>
                <p className="text-3xl font-semibold text-blue-600">
                  駆動型生成AI塾
                </p>
                <p className="mx-auto max-w-[800px] text-gray-600 text-xl md:text-2xl/relaxed lg:text-3xl/relaxed">
                  一生使えるAI知識を今ここに
                </p>
              </div>
              <div className="space-y-4">
                <Button className="bg-blue-600 text-white hover:bg-blue-700 text-lg py-6 px-10 rounded-full transition-all duration-300 transform hover:scale-105">
                  無料カウンセリングを予約 <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <p className="text-sm text-blue-600 font-semibold">
                  大阪開催限定: 今なら受講料10%オフ！
                </p>
              </div>
            </motion.div>
          </div>
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown className="h-12 w-12 text-blue-600" />
          </motion.div>
        </section>

        <section id="コンセプト" className="w-full py-24 md:py-32 bg-gray-50">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-12 text-center text-gray-900"
            >
              なぜ<span className="text-blue-600">AIアカデミア</span>なのか
            </motion.h2>
            <div className="grid gap-12 lg:grid-cols-3">
              {[
                { icon: Clock, title: "時間の解放", description: "AIで業務を効率化し、新たな挑戦や人間らしい活動のための時間を創出します。" },
                { icon: Target, title: "即効性", description: "理論だけでなく、すぐに実践できるスキルを短期集中で習得します。" },
                { icon: Rocket, title: "未来への準備", description: "AI時代の波に乗り遅れず、変革の主役となるための準備をします。" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <div className="bg-blue-100 p-4 rounded-full mb-6">
                    <item.icon className="h-12 w-12 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="特徴" className="w-full py-24 md:py-32 bg-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-12 text-center text-gray-900"
            >
              AIアカデミアの<span className="text-blue-600">特徴</span>
            </motion.h2>
            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: Brain, title: "実践的スキル", description: "理論だけでなく、即座に業務に活用できる実践的なAIスキルを習得します。" },
                { icon: Users, title: "少人数制", description: "最大10名の少人数制で、一人ひとりに合わせた丁寧な指導を行います。" },
                { icon: Lightbulb, title: "短期集中", description: "2日間の集中講座で、効率的にAIスキルを身につけ、すぐに実践できます。" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  <div className="bg-blue-100 p-4 rounded-full mb-6">
                    <item.icon className="h-12 w-12 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="カリキュラム" className="w-full py-24 md:py-32 bg-gray-50">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-12 text-center text-gray-900"
            >
              2日間の<span className="text-blue-600">カリキュラム</span>
            </motion.h2>
            <div className="grid gap-12 md:grid-cols-2">
              {[
                { day: "1日目：基礎と実践", items: ["AIの基礎と生成AIの可能性", "プロンプトエンジニアリングの基本", "ChatGPTを使った業務効率化演習", "AI活用のベストプラクティス"] },
                { day: "2日目：応用と戦略", items: ["高度なAI活用テクニック", "AIを使った創造的問題解決", "自社でのAI導入戦略立案", "AI時代のキャリアプランニング"] }
              ].map((day, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white p-8 rounded-2xl shadow-md"
                >
                  <h3 className="text-2xl font-bold mb-6 text-blue-600">{day.day}</h3>
                  <ul className="space-y-4">
                    {day.items.map((item, itemIndex) => (
                      <motion.li 
                        key={itemIndex} 
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: itemIndex * 0.1 }}
                      >
                        <CheckCircle className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" />
                        <span className="text-gray-600">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="講師紹介" className="w-full py-24 md:py-32 bg-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-12 text-center text-gray-900"
            >
              熱血<span className="text-blue-600">講師陣</span>
            </motion.h2>
            <div className="grid gap-12 md:grid-cols-2">
              {[
                {
                  name: "てる講師",
                  image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/onepiece01_luffy%20(1)-EldukexnTYnnTN9SmUU0rpqwOTeGbk.png",
                  description: "関西大学大学院出身、NTTDATAを経て独立。動画編集、YouTube運営、AI開発の第一人者。",
                  achievements: [
                    "46万登録の動画チャンネル編集ディレクター",
                    "30以上のYouTubeチャンネル立ち上げ経験",
                    "ChatGPT講師として100名以上を指導",
                    "AI×コンサルティングで企業の成長をサポート"
                  ],
                  twitter: "https://x.com/rute1203d"
                },
                {
                  name: "ワン講師",
                  image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hengao_mabuta_uragaesu-1wuCTqQEsChAdg9BCagX7ujWTxOAbF.png",
                  description: "AIに1万時間以上を費やし、GPTs開発のエキスパート。AI活用と営業スキルの融合で驚異的な成果を実現。",
                  achievements: [
                    "AIフリーランスラボ主催",
                    "営業未経験から半年で1050万円の案件獲得",
                    "AI活用で案件単価を10倍に向上",
                    "実践的なAI活用法とビジネス応用を指導"
                  ],
                  twitter: "https://x.com/wan_line_"
                }
              ].map((instructor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center text-center bg-gray-50 p-8 rounded-2xl shadow-md"
                >
                  <Image
                    src={instructor.image}
                    alt={instructor.name}
                    width={192}
                    height={192}
                    className="rounded-full mb-6 border-4 border-blue-100 shadow-lg"
                  />
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{instructor.name}</h3>
                  <p className="text-gray-600 mb-6">{instructor.description}</p>
                  <ul className="text-left text-sm text-gray-500 space-y-2 mb-4">
                    {instructor.achievements.map((achievement, achievementIndex) => (
                      <motion.li 
                        key={achievementIndex} 
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: achievementIndex * 0.1 }}
                      >
                        <Star className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <a href={instructor.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 transition-colors duration-300">
                    Twitter/X
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="FAQ" className="w-full py-24 md:py-32 bg-gray-50">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-12 text-center text-gray-900"
            >
              よくある<span className="text-blue-600">質問</span>
            </motion.h2>
            <div className="grid gap-8 md:grid-cols-2">
              {[
                { question: "AIの知識がなくても参加できますか？", answer: "はい、AIの予備知識がなくても参加いただけます。基礎から丁寧に説明し、実践を通じて学んでいただきます。" },
                { question: "2日間で本当にAIを使いこなせるようになりますか？", answer: "集中的なハンズオントレーニングにより、基本的なAI活用スキルを身につけることができます。さらに、1ヶ月間のフォローアップサポートで、実務での応用をサポートします。" },
                { question: "講座の開催頻度はどのくらいですか？", answer: "毎月1回、週末に開催しています。具体的な日程はお申し込み時にご確認いただけます。" },
                { question: "受講料はいくらですか？", answer: "通常受講料は20万円（税込）です。現在、大阪開催限定で10%オフの18万円でご参加いただけます。早期割引や複数名での申し込み割引もございますので、詳細はお問い合わせください。" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-md"
                >
                  <h3 className="text-xl font-bold mb-4 text-blue-600">{item.question}</h3>
                  <p className="text-gray-600">{item.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-24 md:py-32 bg-blue-600">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white mb-6"
            >
              AI革命の波に乗り遅れないために
            </motion.h2>
            <motion.p 
              className="mx-auto max-w-[800px] text-blue-100 text-xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              大阪の再開発が進み、経済も盛り上がりを見せる今こそ、AIの新技術を体験し、大阪からAIの波を引き起こす時です。<br />
              2日間の集中講座で、あなたのキャリアと人生を変える準備はできていますか？<br />
              今すぐ無料カウンセリングを予約して、AIの力を最大限に活用する方法を学びましょう。
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button className="bg-white text-blue-600 hover:bg-blue-50 text-lg py-6 px-10 rounded-full transition-all duration-300 transform hover:scale-105">
                無料カウンセリングを予約する <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </section>

        <section className="w-full py-24 md:py-32 bg-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
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
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold mb-6 text-gray-900">メッセージを送る</h2>
                <form className="space-y-4">
                  <Input className="bg-gray-50 border-gray-300" placeholder="お名前" />
                  <Input className="bg-gray-50 border-gray-300" type="email" placeholder="メールアドレス" />
                  <Textarea className="bg-gray-50 border-gray-300" placeholder="メッセージ" rows={4} />
                  <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300">送信</Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">あなたのAIアカデミア</h3>
              <p className="text-sm text-gray-600">
                最先端のAI教育で、あなたのキャリアを次のレベルへ。
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">リンク</h3>
              <ul className="space-y-2">
                {["ホーム", "コース内容", "講師紹介", "よくある質問", "お問い合わせ"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">法的情報</h3>
              <ul className="space-y-2">
                {["利用規約", "プライバシーポリシー", "特定商取引法に基づく表記"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">フォローする</h3>
              <div className="flex space-x-4">
                {[Twitter, Facebook, Instagram, Linkedin].map((Icon, index) => (
                  <a key={index} href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                    <Icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-600">
              © 2024 あなたのAIアカデミア All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}