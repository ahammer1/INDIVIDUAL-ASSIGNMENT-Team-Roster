// const SearchBar = ({ searchQuery, setSearchQuery }) => (
//   <form action="/" method="get">
//     <label htmlFor="header-search">
//       <span className="visually-hidden">Search Members</span>
//     </label>
//     <input
//       value={searchQuery}
//       onInput={(e) => setSearchQuery(e.target.value)}
//       type="text"
//       id="header-search"
//       placeholder="Search Members"
//       name="s"
//     />
//     <button type="submit">Search</button>
//   </form>
// );

// const Members = [
//   {},
// ];

// const { search } = window.location;
// const query = new URLSearchParams(search).get('s');
// const filterMembers = (Member, query) => {
//   if (!query) {
//     return Member;
//   }

//   return Members.filter((member) => {
//     const memberName = member.name.toLowerCase();
//     return memberName.includes(query);
//   });
// };

// export default SearchBar;
