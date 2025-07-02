import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <div className="relative h-80 md:h-[500px] rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/sareh-homepagearabic.jpg" // Replace with your image path
              alt="شركة الملن للتكنولوجيا"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Text side */}
          <div className="space-y-6 text-right" dir="rtl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              تأخذ عملك إلى المستوى التالي!
            </h2>

            <p className="text-lg text-gray-700">
              تأسست الملن للتكنولوجيا في عام 2002، وتُعد واحدة من أبرز وأقدم
              شركات البرمجيات في الأردن. حيث تعود أصواتها الراسدة إلى عام 1982،
              منذ تأسيسها، آثبت الملن مكانتها كشركة برمجيات في الأردن تتمتع
              بخبرة ومعرفة واسعة في تقديم الحلول البرمجية المتقدمة.
            </p>

            <p className="text-lg text-gray-700">
              تتميز الملن بكونها شركة برمجيات في الأردن تركز على تطوير وتحسين
              البرمجيات بشكل مستمر مع تقديم حلول تقنية المعلومات بأعلى مستوى.
              يجمع فريق العمل بين التكنولوجيا الحديثة والفهم العميق لاحتياجات
              السوق المحلي.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-bold text-blue-700">20+ سنة</h3>
                <p className="text-gray-600">خبرة في مجال البرمجيات</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-bold text-green-700">500+ مشروع</h3>
                <p className="text-gray-600">ناجح لشركات مختلفة</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
