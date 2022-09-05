const make = () => {
   return (
      <form action="/api/_admin" method="post">
         <input type="text" name="author" id="author" /> <br />
         <input type="text" name="body" id="body" /> <br />
         <input type="submit" name="submit" id="submit" />
      </form>
   );
};

export default make;
