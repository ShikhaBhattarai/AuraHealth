import { siteConfig } from "../../lib/data";

export default function UtilityBar() {
  return (
    <div className="utility">
      <div className="wrap">
        <div className="left">
          <a href={siteConfig.addressHref} target="_blank" rel="noopener noreferrer">
            📍 {siteConfig.address}
          </a>
          <a href={siteConfig.phoneHref}>📞 {siteConfig.phone}</a>
        </div>
        <div className="left">
          <a href="#">Facebook</a>
          <a href="#">Google Reviews</a>
        </div>
      </div>
    </div>
  );
}
