const allTopics = document.querySelectorAll('.topic');
allTopics.forEach(topic => {
    const topicName = topic.getAttribute('topic-name');
    const topicSegment = document.createElement('div');
    topicSegment.classList.add('previwer-topic-segment');
    topicSegment.innerHTML = `Topic: ${topicName}`;

    const codes = topic.innerHTML;
    const preElement = document.createElement('pre');
    preElement.textContent = codes;
    const codeElement = document.createElement('code');
    codeElement.appendChild(preElement);
    const codeSegment = document.createElement('div');
    codeSegment.classList.add('previwer-code-segment');
    codeSegment.appendChild(preElement);

    const previewSegment = document.createElement('div');
    previewSegment.classList.add('previwer-preview-segment');
    previewSegment.innerHTML = codes;


    topic.innerHTML = topicSegment.outerHTML + codeSegment.outerHTML + previewSegment.outerHTML;
})