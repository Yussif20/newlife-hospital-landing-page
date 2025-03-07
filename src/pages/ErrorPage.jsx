import { Link } from 'react-router-dom';
import Button from '@components/Button';

export const ErrorPage = () => {
  return (
    <div className="h-[400px] mx-12 grid place-items-center text-center">
      <div>
        <h2 className="text-[60px]">الصفحة قيد الانشاء...</h2>
        <Link to="/">
          <Button>الرجوع الى الصفحة الرئيسية</Button>
        </Link>
      </div>
    </div>
  );
};
