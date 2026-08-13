import type { TeamMember } from '@/content/types';
import { LitWrap } from '@/components/ds';
import { TeamPhoto } from './TeamPhoto';

/**
 * One team member: portrait, name, role, bio, focus chips and — where the
 * record carries one — a link to their personal portfolio site. The article
 * `id` is the member slug so blog-post author links (`/about#<slug>`) land here.
 */
export interface TeamCardProps {
  member: TeamMember;
}

export function TeamCard({ member }: TeamCardProps) {
  return (
    <LitWrap on="light" className="about-team__wrap">
      <article id={member.slug} className="about-team__card">
        <div className="about-team__media">
          <TeamPhoto
            src={member.photo}
            name={member.name}
            role={member.role}
            initials={member.initials}
          />
        </div>

        <div className="about-team__body">
          <h3 className="about-team__name">{member.name}</h3>
          <p className="about-team__role">{member.role}</p>
          <p className="about-team__bio">{member.bio}</p>

          <ul className="about-team__focus" aria-label={`What ${member.name} works on`}>
            {member.focus.map((item) => (
              <li key={item} className="tk-chip">
                {item}
              </li>
            ))}
          </ul>

          {member.portfolio ? (
            <p className="about-team__portfolio">
              <a href={member.portfolio} target="_blank" rel="noopener noreferrer">
                {member.portfolio.replace(/^https?:\/\//, '')}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </p>
          ) : null}
        </div>
      </article>
    </LitWrap>
  );
}
