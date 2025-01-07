import { useTranslations } from 'next-intl';
const LoginWithSocial = () => {
  const t = useTranslations("Login");
  return (
    <div className="btn-box row">
      <div className="col-lg-12 col-md-12">
        <a href="#" className="theme-btn social-btn-two facebook-btn">
        {t('Login via')}
        </a>
      </div>
    </div>
  );
};

export default LoginWithSocial;
