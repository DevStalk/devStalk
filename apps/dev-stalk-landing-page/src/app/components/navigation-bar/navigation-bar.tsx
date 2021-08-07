import './navigation-bar.module.scss';

/* eslint-disable-next-line */
export interface NavigationBarProps {}

export function NavigationBar(props: NavigationBarProps) {
  return (
    <div className="navigation">
      <div className="navigation__logo">
        <h1>devStalk</h1>
      </div>
      <div className="navigation__menu"></div>
      <div className="navigation__cta"></div>
    </div>
  );
}

export default NavigationBar;
