import type { ServiceFeature } from '@/content/types';
import { Icon } from '@/components/ds';
import { cx } from '@/components/ds/cx';

/**
 * "What you get" — a purple check disc, a short heading and a paragraph of
 * substance for each item. Three columns, then two, then one.
 */
export interface ServiceFeatureGridProps {
  features: ServiceFeature[];
  className?: string;
}

export function ServiceFeatureGrid({ features, className }: ServiceFeatureGridProps) {
  if (features.length === 0) return null;

  return (
    <div className={cx('tk-svc-features', className)}>
      {features.map((feature) => (
        <div key={feature.title} className="tk-svc-feature">
          <span className="tk-svc-feature__check" aria-hidden="true">
            <Icon name="check" size={13} strokeWidth={3} />
          </span>
          <div>
            <h3 className="tk-svc-feature__title">{feature.title}</h3>
            <p className="tk-svc-feature__copy">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
