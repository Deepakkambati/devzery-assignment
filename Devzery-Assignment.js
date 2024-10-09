export default function Widget() {
    return ( <
        div className = "flex flex-col md:flex-row h-screen bg-background" > {
            /* Sidebar */
        } <
        nav className = "w-full md:w-64 bg-card p-4 flex-shrink-0" >
        <
        h1 className = "text-xl font-bold text-primary" > Dezvery < /h1> <
        ul className = "mt-6 space-y-4" >
        <
        li >
        <
        a href = "#"
        className = "text-primary hover:text-primary-foreground" > API Overview < /a> < /
        li > <
        li >
        <
        a href = "#"
        className = "text-primary hover:text-primary-foreground" > Bug Tracker < /a> < /
        li > <
        li >
        <
        a href = "#"
        className = "text-primary hover:text-primary-foreground" > Integration < /a> < /
        li > <
        li >
        <
        a href = "#"
        className = "text-primary hover:text-primary-foreground" > Settings < /a> < /
        li > <
        /ul> <
        div className = "mt-auto pt-4" >
        <
        a href = "#"
        className = "text-destructive" > Logout < /a> < /
        div > <
        /nav>

        {
            /* Main Content */
        } <
        main className = "flex-1 p-6" >
        <
        h2 className = "text-2xl font-semibold text-primary" > New Test Case < /h2> <
        form className = "mt-4 bg-card p-4 rounded-lg shadow" > {
            /* Test Case Title */
        } <
        div className = "mb-4" >
        <
        label className = "block text-primary"
        htmlFor = "testCaseTitle" > Test Case Title < /label> <
        input type = "text"
        id = "testCaseTitle"
        className = "w-full p-2 border border-border rounded"
        placeholder = "Describe what this test case is about..." / >
        <
        /div>

        {
            /* Priority Selection */
        } <
        div className = "mb-4" >
        <
        label className = "block text-primary"
        htmlFor = "priority" > Priority < /label> <
        select id = "priority"
        className = "w-full p-2 border border-border rounded" >
        <
        option > Low < /option> <
        option > Medium < /option> <
        option > High < /option> < /
        select > <
        /div>

        {
            /* Add API Sequence */
        } <
        div className = "mb-4" >
        <
        label className = "block text-primary" > Add API sequence < /label> <
        select className = "w-full p-2 border border-border rounded mb-2" >
        <
        option > Create Coupon API < /option> <
        option > Add Product To Cart API < /option> < /
        select > <
        button type = "button"
        className = "bg-primary text-primary-foreground p-2 rounded w-full sm:w-auto" > + < /button> < /
        div >

        {
            /* Request and Expected Response */
        } <
        div className = "mb-4" >
        <
        label className = "block text-primary" > Request < /label> <
        textarea className = "w-full p-2 border border-border rounded"
        rows = "5"
        placeholder = '{"couponType": "stackable", "collectionCondition": true}' > < /textarea> < /
        div >

        <
        div className = "mb-4" >
        <
        label className = "block text-primary" > Expected Response < /label> <
        textarea className = "w-full p-2 border border-border rounded"
        rows = "5"
        placeholder = '{"couponType": "stackable", "discountAmount": 100}' > < /textarea> < /
        div >

        {
            /* Submit and Cancel Buttons */
        } <
        div className = "flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4" >
        <
        button type = "submit"
        className = "bg-secondary text-secondary-foreground p-2 rounded w-full sm:w-auto" > Add < /button> <
        button type = "button"
        className = "bg-muted text-muted-foreground p-2 rounded w-full sm:w-auto" > Cancel < /button> < /
        div > <
        /form>

        {
            /* Headers Section */
        } <
        div className = "mt-6" >
        <
        h3 className = "text-xl font-semibold text-primary" > Headers < /h3> <
        div className = "bg-card p-4 rounded-lg mt-2 space-y-2" >
        <
        div className = "flex justify-between" >
        <
        span className = "text-primary" > Content - Type < /span> <
        span className = "text-primary" > application / json < /span> < /
        div > <
        div className = "flex justify-between" >
        <
        span className = "text-primary" > Accept < /span> <
        span className = "text-primary" > application / json < /span> < /
        div > <
        div className = "flex justify-between" >
        <
        span className = "text-primary" > Authorization < /span> <
        span className = "text-primary" > Bearer token < /span> < /
        div > <
        div className = "flex justify-between" >
        <
        span className = "text-primary" > Accept - Encoding < /span> <
        span className = "text-primary" > gzip < /span> < /
        div > <
        div className = "flex justify-between" >
        <
        span className = "text-primary" > Cache - Control < /span> <
        span className = "text-primary" > no - cache < /span> < /
        div > <
        /div> < /
        div > <
        /main> < /
        div >
    );
}