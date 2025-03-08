import laptopImage from '../assets/services/laptop.jpg';

const Services = () => {
  return (
    <div className="bg-white w-4/6 mx-auto flex items-center justify-center gap-8 p-8">
      <div className="flex-1">
        <img className="max-w-full" src={laptopImage} alt="laptop" />
      </div>
      <div className="flex-1 px-4 text-[##212529] text-base leading-6">
        <h4 className="text-[#008EB9] text-xl font-medium pb-4">
          خدمات طبية ورعاية صحية متميزة
        </h4>
        <ul className="flex flex-col gap-6 items-start justify-center">
          <li className="w-full flex items-center justify-between gap-4">
            <p>
              يستفيدُ عملاؤنا من خصم يصل الى 80% على قائمة طويلة من العيادات
              والمراكز الطبّية والمستشفيات المعياريّة وخدمات التمريض وأخصائيو
              العيون في الجمهورية اليمنية.
            </p>
            <i className="fa-solid fa-check text-3xl text-[#CCCCCC]"></i>
          </li>
          <li className="w-full flex items-center justify-between gap-4">
            <p>
              لا يُلزم عملاؤنا بتقديم أيّ أوراقٍ مع بطاقة نيو لايف للرعاية
              الصحية عدا إثبات الشخصية.
            </p>
            <i className="fa-solid fa-check text-3xl text-[#CCCCCC]"></i>
          </li>
          <li className="w-full flex items-center justify-between gap-4 ">
            <p>تستخدَم البطاقة بشكلٍ غير محدود من دون أيّ تقييدات اخرى. .</p>
            <i className="fa-solid fa-check text-3xl text-[#CCCCCC]"></i>
          </li>
          <li className="w-full flex items-center justify-between gap-4">
            <p>تشملُ بطاقة العضويّة الواحدة فرداً واحداً.</p>
            <i className="fa-solid fa-check text-3xl text-[#CCCCCC]"></i>
          </li>
          <li className="w-full flex items-center justify-between gap-4">
            <p>تفعل العضويّة مباشرةً من دون أيّ فترة انتظار</p>
            <i className="fa-solid fa-check text-3xl text-[#CCCCCC]"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Services;
