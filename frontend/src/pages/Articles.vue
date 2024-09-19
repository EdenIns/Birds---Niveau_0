<template>
    <div>
        <h1>Voir les articles</h1>
        <main>
            <BCard v-for="article in articles" :key="article.id">
                <BCardImg :src="article.imageUrl" alt="Image" />
                <BCardBody>
                    <BCardTitle>{{ article.title }}</BCardTitle>
                    <p>{{ article.description }}</p>
                </BCardBody>
            </BCard>
            <BButton><router-link to="addNewArticle">Ajouter un nouvel article</router-link></BButton>
        </main>
    </div>
</template>

<script setup>
import { BCard, BCardImg, BCardTitle, BCardBody, BButton } from 'bootstrap-vue-next';
import Articles from "../api/Articles";
import { onMounted, ref } from 'vue';

const articles = ref([]);

const fetchArticles = async () => {
    try {
        articles.value = await Articles.getArticles();
        console.log(articles.value);
    } catch (error) {
        console.error('Failed to fetch articles:', error);
    }
};

onMounted(fetchArticles);
</script>
<!--   
  <style>

  </style> -->