async function main(){ /* פונקציה א-סינכרונית */
    /* אנחנו רוצים להביא את המידע מהשרת */
   /* fetch return promise of response - כלומר פרומיס שאם נעשה לו אאוויט נקבל ריספונס*/
   /* נעשה פטצ', ואחרי שהוא סיים, הוא יעשה ריספונס.ג'ייסון
   ונחזיר את מה שהוא מחזיר ולכל זה נעשה אאוייט */
   const data = await fetch('/api/pokemons').then(res => res.json());
   console.log({ data });
};
main();