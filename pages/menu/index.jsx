import MenuWrapper from "../../components/product/MenuWrapper";
import Head from "next/head";
import axios from "axios";

const Index = ({ categoryList, productList }) => {
  return (
    <div className="pt-10">
      <Head>
        <title>Feane Restaurant</title>
      </Head>
      <MenuWrapper categoryList={categoryList} productList={productList} />
    </div>
  );
};

export const getServerSideProps = async () => {
  const category = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/categories`
  );
  const product = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/products`
  );
  return {
    props: {
      categoryList: category.data ? category.data : [],
      productList: product.data ? product.data : [],
    },
  };
};

export default Index;
