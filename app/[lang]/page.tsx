import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getIeltsCourse } from "@/lib/action/ielts-course.action";
import {
  Calendar,
  Download,
  MessageCircle,
  Play,
  Shield,
  Smartphone,
  Star,
} from "lucide-react";
import Image from "next/image";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ lang: "en" | "bn" }>;
}) {
  const lang = (await params).lang || "en";
  const courseData = await getIeltsCourse(lang);

  return (
    <div className="relative">
      {/* Fixed Header */}
      <section className="bg-neutral-900 text-white fixed top-0 left-0 right-0 z-10 h-16">
        <div className="container mx-auto px-4 flex items-center justify-between h-full">
          <div className="space-y-0.5">
            <h1 className="text-base font-bold font-space-grotesk">
              {courseData?.data.title}
            </h1>
            <div className="flex items-center gap-0.5 cursor-pointer">
              <Image
                src="https://cdn.10minuteschool.com/images/Dev_Handoff_Q1_24_Frame_2_1725444418666.png"
                alt="Rating"
                width={500}
                height={300}
                className="h-4 w-auto object-contain"
              />
              <p className="text-xs font-medium">
                (82.6% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)
              </p>
            </div>
          </div>
          <div className=" items-center gap-2 hidden sm:flex">
            <div className="space-y-0.5">
              <span className="flex items-center gap-1 text-sm font-medium text-gray-300">
                <Image
                  src={courseData?.data.checklist[0]?.icon || ""}
                  alt="Participants"
                  width={500}
                  height={300}
                  className="h-4 object-contain bg-white w-fit rounded-full p-0.5"
                />
                <span>{courseData?.data.checklist[0]?.text}</span>
              </span>
              <span className="flex items-center gap-1 justify-end">
                <span className="text-green-500 font-bold text-sm">৳ 3850</span>
                <span className="text-red-400 line-through text-xs font-normal">
                  ৳ 5000
                </span>
              </span>
            </div>
            <button className="bg-green-500 text-white px-4 py-2 rounded-sm hover:bg-green-600 transition-colors">
              {courseData?.data.cta_text.name}
            </button>
          </div>
        </div>
      </section>
      {/* Main Content */}
      <section className="text-white h-[400px] bg-[url('https://cdn.10minuteschool.com/images/ui_%281%29_1716445506383.jpeg')] bg-cover bg-center">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-4">
            <Badge
              variant="secondary"
              className="bg-red-500 text-white hover:bg-red-600"
            >
              🔥 স্পেশাল অফার - ৩৭% ছাড়
            </Badge>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            IELTS Course by Munzereen Shahid
          </h1>
          <p className="text-lg text-gray-300 mb-6 max-w-4xl">
            Academic IELTS এবং General Training IELTS- এর কমপ্লিট প্রিপারেশন নিন
            একটি কোর্সেই! দেশসেরা IELTS Instructor এর গাইডলাইনে আপনার কাঙ্ক্ষিত
            ব্যান্ড স্কোরটি অর্জন করতে আজই জয়েন করুন।
          </p>

          <div className="flex items-center gap-6 mb-6">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="w-5 h-5 text-yellow-400 fill-current"
                />
              ))}
              <span className="ml-2 text-yellow-400 font-semibold">4.9</span>
            </div>
            <span className="text-gray-300">(৩৩,০০৭ জন শিক্ষার্থী)</span>
          </div>

          <div className="flex items-center gap-4 mb-8">
            <Avatar className="w-12 h-12">
              <AvatarImage src="https://cdn.10minuteschool.com/images/skills/lp/ms_onset.jpg" />
              <AvatarFallback>MS</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold">Munzereen Shahid</p>
              <p className="text-sm text-gray-300">
                MSc (English), University of Oxford (UK) | IELTS: 8.5
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Placeholder for main content */}
      <section className="container mx-auto px-4 py-8 ">
        <div className="grid lg:grid-cols-3 gap-8 ">
          {/* Main Content - Left Side */}
          <div className="lg:col-span-2 space-y-12">
            <h2 className="text-2xl font-bold">কোর্সের বিবরণ</h2>
            <p>{courseData?.data.description}</p>
          </div>
          {/* Sticky Sidebar - Right Side */}
          <div className="lg:col-span-1 -mt-[300px]">
            <div className="sticky top-4 space-y-6">
              {/* Pricing Card */}
              <div className="shadow-lg rounded-xs bg-white p-1.5">
                <div className="relative">
                  <Image
                    src="https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png"
                    alt="Course Preview"
                    width={400}
                    height={225}
                    className="w-full rounded-xs"
                  />
                  <Button
                    size="sm"
                    className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm"
                  >
                    <Play className="w-4 h-4" />
                  </Button>
                </div>
                <div className="p-4">
                  <Button className="w-full mb-4 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 text-lg">
                    কোর্সটি কিনুন
                  </Button>

                  <Separator className="my-4" />

                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm mb-3">
                      এই কোর্সে যা পাবেন:
                    </h4>
                    {courseData?.data.checklist.map((stat, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Image
                          src={stat.icon}
                          alt={stat.text}
                          width={16}
                          height={16}
                          className="w-4 h-4"
                        />
                        <span className="text-sm text-gray-700">
                          {stat.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Separator className="my-4" />

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Smartphone className="w-4 h-4" />
                      <span>মোবাইল ও কম্পিউটারে অ্যাক্সেস</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Download className="w-4 h-4" />
                      <span>ডাউনলোডযোগ্য রিসোর্স</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Shield className="w-4 h-4" />
                      <span>সার্টিফিকেট অব কমপ্লিশন</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>নিয়মিত আপডেট</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">কোর্স পরিসংখ্যান</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">
                        ৩৩K+
                      </div>
                      <div className="text-xs text-gray-500">শিক্ষার্থী</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">
                        ৪.৯
                      </div>
                      <div className="text-xs text-gray-500">রেটিং</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600">
                        ৫০+
                      </div>
                      <div className="text-xs text-gray-500">ঘন্টা</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-orange-600">
                        ৮৫%
                      </div>
                      <div className="text-xs text-gray-500">সাফল্যের হার</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Support */}
              <Card>
                <CardContent className="p-4 text-center">
                  <h4 className="font-semibold mb-2 text-sm">
                    সাহায্য প্রয়োজন?
                  </h4>
                  <p className="text-xs text-gray-600 mb-3">
                    আমাদের সাপোর্ট টিমের সাথে যোগাযোগ করুন
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full bg-transparent"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    সাপোর্ট চ্যাট
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
