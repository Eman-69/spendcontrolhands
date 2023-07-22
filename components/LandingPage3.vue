<template>
    <div class="page-container">
    <section class="page3" id="page3">
        <div class="page3-texts">
                <h1 class="page3-title">Improve your business using our Analytics Products & Services</h1>
                <p class="page3-para">With constantly demanding business users, changing IT priorities and technologies and shrinking budgets, building your own analytics solution internally is not always viable.</p>
                <p class="page3-para">Our products and services are built around best of the breed technologies and architectures. Using our industry best practices helps you get started quickly and at a price within your budgets.</p>
        </div>
    </section>
    </div>
</template>

<style>
    template{
        width: 100vw;
        height: 100vh;
    }
    .page3{
        display: grid;
        grid-template-columns: 50vw 50vw;
        justify-content: space-between;
        height: 100%;

    }
    .page3-texts{
        text-align: left;
        margin:20vh 5vw 5vh;
    }
    .page3-title{
        margin-bottom: 3vh;
    }

    .page3-para{
        margin-top: 5vh;
    }
@media only screen and (max-width:799px)
  {

     .page3-texts{
        text-align: center;
    }
     .page3{
        grid-template-columns: 100%;
        height: 100vh;
    }
}
@media (orientation: portrait)
{
  .page3{
    grid-template-columns: 1fr;
  }
}

</style>