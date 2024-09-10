

type childrenType = {
    children: React.ReactNode;
}

const Container: React.FC<childrenType> = ({ children }) => {
  return (
    <div className='max-w-[1128px] mx-auto'>{children}</div>
  );
};


export default Container