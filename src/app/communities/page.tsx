import CardGroupVideos from '../../components/components_communities/CardGroupVideos';
import CommunitiesCard from '../../components/components_communities/CardGrupComunities';

export default function Community() {
  return (
    <div>
      <main className="custom-main">
        <div>
          <CommunitiesCard />
        </div>
        <div>
          <CardGroupVideos />
        </div>
      </main>
    </div>
  );
}
