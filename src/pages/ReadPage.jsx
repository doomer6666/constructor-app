import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReadOnlyBlock from "../components/SampleComponents/ReadOnlyBlock";
import { getOnlyPage } from "../api/getOnlyPageApi";

import HeaderBlock from "../components/SampleComponents/HeaderBlock";
import TextBlock from "../components/SampleComponents/TextBlock";
import GalleryBlock from "../components/SampleComponents/GalleryBlock";
import ButtonBlock from "../components/SampleComponents/ButtonBlock";
import ContactsBlock from "../components/SampleComponents/ContactsBlock";
import VideoBlock from "../components/SampleComponents/VideoBlock";
import UpButton from "../components/UpButton";

const ReadOnlyPage = () => {
  const [blocks, setBlocks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();

  const componentMap = {
    header: HeaderBlock,
    text: TextBlock,
    gallery: GalleryBlock,
    button: ButtonBlock,
    contacts: ContactsBlock,
    video: VideoBlock,
  };

  useEffect(() => {
    if (id) {
      setIsLoading(true);
      const fetchData = async () => {
        try {
          const response = await getOnlyPage(id);
          const parsedData = JSON.parse(response.sample_data);
          setBlocks(parsedData);
        } catch (err) {
          setError(err);
        } finally {
          setIsLoading(false);
        }
      };

      fetchData();
    }
  }, [id]);

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error.message}</div>;

  return (
    <section className="read-only-page">
      <section className="page-content">
        {blocks.map((block) => {
          const PageContent = componentMap[block.type];
          return (
            <ReadOnlyBlock
              key={block.id}
              type={block.type}
              data={block.data}
              sample={block.sample}
              pageContent={PageContent}
            />
          );
        })}
      </section>
      <UpButton />
    </section>
  );
};

export default ReadOnlyPage;
